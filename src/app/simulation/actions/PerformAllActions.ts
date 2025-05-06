import { Action } from './Action';
import { Creature } from './Creatures/Creature';

export class PerformAllAction implements Action {
  private actions: Action[];

  constructor(actions: Action[] | [...Action[]]) {
    this.actions = Array.isArray(actions) ? actions : [...actions];
  }

  canPerform(actor: Creature, enemies: Creature[], allies: Creature[]): boolean {
    const canPerformActions = this.actions.filter(action =>
      action.canPerform(actor, enemies, allies) && !action.isLost()
    );
    return canPerformActions.length > 0;
  }

  getName(): string {
    return '';
  }

  isLost(): boolean {
    const filteredActions = this.actions.filter(action => !action.isLost());
    return filteredActions.length === 0;
  }

  isMagical(): boolean {
    // TODO: Decide how to handle this
    return false;
  }

  perform(actor: Creature, enemies: Creature[], allies: Creature[]): void {
    const filteredActions = this.actions.filter(action =>
      action.canPerform(actor, enemies, allies) && !action.isLost()
    );

    filteredActions.forEach(action => action.perform(actor, enemies, allies));
  }
}
