import { Dice } from './Dice';

export class SingleDie implements Dice {

  private static readonly random = {
    nextInt: (max: number) => Math.floor(Math.random() * max),
  };

  public static readonly D1 = new SingleDie(1);
  public static readonly D4 = new SingleDie(4);
  public static readonly D5 = new SingleDie(5);
  public static readonly D6 = new SingleDie(6);
  public static readonly D8 = new SingleDie(8);
  public static readonly D10 = new SingleDie(10);
  public static readonly D12 = new SingleDie(12);
  public static readonly D20 = new SingleDie(20);

  private readonly sides: number;
  private readonly bonus: number;

  constructor(sides: number, bonus = 0) {
    this.sides = sides;
    this.bonus = bonus;
  }

  roll(): number {
    return SingleDie.random.nextInt(this.sides) + 1 + this.bonus;
  }
}
