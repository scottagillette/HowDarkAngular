import { Creature } from './Creatures/Creature';

export interface Action {

  canPerform(actor: Creature, enemies: Creature[], allies: Creature[]): boolean;

  getName(): string;

  isLost(): boolean;

  isMagical(): boolean;

  perform(actor: Creature, enemies: Creature[], allies: Creature[]): void;
}
