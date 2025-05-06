import { Dice } from './Dice';

export class ZeroDice implements Dice {
  roll(): number {
    return 0;
  }
}
