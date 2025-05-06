import { Action } from '../actions/Action';
import { Condition } from '../conditions/Condition';
import { ShieldOfFaithCondition } from '../conditions/ShieldOfFaithCondition';
import { UnconciousCondition } from '../conditions/UnconciousCondition';
import { DyingCondition } from '../conditions/DyingCondition';
import { SleepingCondition } from '../conditions/SleepingCondition';
import { Creature } from './Creature';
import { Stats } from './Stats';
import { SingleTargetSelector } from '../targets/SingleTargetSelector';
import { RandomTargetSelector } from '../targets/RandomTargetSelector';
import { D20, D4 } from '../dice/SingleDie';

export abstract class BaseCreature implements Creature {

  private readonly action: Action;
  private readonly armorClass: number;
  private readonly conditions: Map<string, Condition> = new Map();
  private currentHitPoints: number;
  private dead = false;
  private readonly hitPoints: number;
  private readonly level: number;
  private readonly monster: boolean;
  private readonly name: string;
  private readonly stats: Stats;
  private readonly targetSelector: SingleTargetSelector;
  private readonly undead: boolean;

  constructor(
    name: string,
    level: number,
    undead: boolean,
    monster: boolean,
    stats: Stats,
    armorClass: number,
    hitPoints: number,
    action: Action,
    targetSelector: SingleTargetSelector = new RandomTargetSelector()
  ) {
    this.name = name;
    this.level = level;
    this.undead = undead;
    this.monster = monster;
    this.stats = stats;
    this.armorClass = armorClass;
    this.hitPoints = hitPoints;
    this.currentHitPoints = hitPoints;
    this.action = action;
    this.targetSelector = targetSelector;
  }

  addCondition(condition: Condition): void {
    this.conditions.set(condition.constructor.name, condition);
  }

  canAct(): boolean {
    const cantActConditions = [...this.conditions.values()].filter(c => !c.canAct());
    return cantActConditions.length === 0 && !this.dead;
  }

  getAC(): number {
    const cantActConditions = [...this.conditions.values()].filter(c => !c.canAct());

    if (cantActConditions.length === 0) {
      const condition = this.conditions.get(ShieldOfFaithCondition.name) as ShieldOfFaithCondition;
      return condition ? this.armorClass + condition.getAcBonus() : this.armorClass;
    }
    return 0;
  }

  getAction(): Action {
    return this.action;
  }

  getCurrentHitPoints(): number {
    return this.currentHitPoints;
  }

  getTargetSelector(): SingleTargetSelector {
    return this.targetSelector;
  }

  getInitiative(): number {
    return D20.roll() + this.stats.getDexterityModifier();
  }

  getLevel(): number {
    return this.level;
  }

  getMaxHitPoints(): number {
    return this.hitPoints;
  }

  getName(): string {
    return this.name;
  }

  getStats(): Stats {
    return this.stats;
  }

  getStatus(): string {
    if (this.dead) return "Dead";
    if (this.isUnconscious()) return "Unconscious";
    return "Alive";
  }

  getWoundedAmount(): number {
    return this.hitPoints - this.currentHitPoints;
  }

  hasCondition(conditionName: string): boolean {
    return this.conditions.has(conditionName);
  }

  healDamage(amount: number): void {
    if (!this.dead) {
      this.currentHitPoints = Math.min(this.hitPoints, this.currentHitPoints + amount);
      this.conditions.delete(UnconciousCondition.name);
      this.conditions.delete(DyingCondition.name);
    }
  }

  isDead(): boolean {
    return this.dead;
  }

  isUnconscious(): boolean {
    return this.conditions.has(UnconciousCondition.name);
  }

  isUndead(): boolean {
    return this.undead;
  }

  isWounded(): boolean {
    return this.currentHitPoints !== 0 && this.currentHitPoints < this.hitPoints;
  }

  setDead(dead: boolean): void {
    this.dead = dead;
    this.currentHitPoints = dead ? 0 : this.currentHitPoints;
    this.conditions.clear();
  }

  takeDamage(amount: number, silvered: boolean, magical: boolean): void {
    this.conditions.delete(SleepingCondition.name);
    this.currentHitPoints = Math.max(0, this.currentHitPoints - amount);

    if (this.currentHitPoints === 0) {
      if (this.monster) {
        console.info(`${this.name} is dead!`);
        this.conditions.clear();
        this.dead = true;
      } else {
        const deathRounds = D4.roll();
        console.info(`${this.name} is unconscious and dying in ${deathRounds} rounds!`);
        this.conditions.set(UnconciousCondition.name, new UnconciousCondition());
        this.conditions.set(DyingCondition.name, new DyingCondition(deathRounds));
      }
    }
  }

  takeTurn(enemies: Creature[], allies: Creature[]): void {
    const remainingConditions = [...this.conditions.values()].filter(c => !c.hasEnded(this));
    this.conditions.clear();
    remainingConditions.forEach(c => this.conditions.set(c.constructor.name, c));
    this.conditions.forEach(c => c.perform(this));

    if (this.canAct()) {
      this.action.perform(this, enemies, allies);
    }
  }
}
