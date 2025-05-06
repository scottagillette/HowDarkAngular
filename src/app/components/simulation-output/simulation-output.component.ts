import { Component } from '@angular/core';
import { Dice } from '../../simulation/dice/Dice'
import { SingleDie } from "../../simulation/dice/SingleDie"

@Component({
  selector: 'app-simulation-output',
  imports: [],
  templateUrl: './simulation-output.component.html',
  styleUrl: './simulation-output.component.css'
})
export class SimulationOutputComponent {
  dice: Dice;

  constructor() {
    this.dice = SingleDie.D20;
  }
}
