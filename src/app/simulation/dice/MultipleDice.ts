import { Dice } from './Dice';

export class MultipleDice implements Dice {

  private readonly diceSet: Dice[];
  private readonly bonus: number;

  constructor(diceSet: Dice[], bonus: number = 0) {
    this.diceSet = diceSet;
    this.bonus = bonus;
  }

  static fromDice(...dice: Dice[]): MultipleDice {
    return new MultipleDice(dice);
  }

  roll(): number {
    let result = this.bonus;
    for (const dice of this.diceSet) {
      result += dice.roll();
    }
    return result;
  }
}
