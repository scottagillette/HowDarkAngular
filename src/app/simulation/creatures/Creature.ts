import { Action } from './Action';
import { Condition } from './Condition';
import { SingleTargetSelector } from './SingleTargetSelector';
import { Stats } from './Stats';

export interface Creature {

  addCondition(condition: Condition): void;

  canAct(): boolean;

  getAC(): number;

  getAction(): Action;

  getCurrentHitPoints(): number;

  getTargetSelector(): SingleTargetSelector;

  getName(): string;

  getInitiative(): number;

  getLevel(): number;

  getMaxHitPoints(): number;

  getStats(): Stats;

  getStatus(): string;

  getWoundedAmount(): number;

  hasCondition(conditionName: string): boolean;

  healDamage(hitPoints: number): void;

  isDead(): boolean;

  isUnconscious(): boolean;

  isUndead(): boolean;

  isWounded(): boolean;

  setDead(dead: boolean): void;

  takeDamage(amount: number, silvered: boolean, magical: boolean): void;

  takeTurn(enemies: Creature[], allies: Creature[]): void;
}
