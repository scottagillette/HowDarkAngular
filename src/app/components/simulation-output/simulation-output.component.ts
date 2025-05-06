import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Dice } from '../../simulation/dice/Dice'
import { SingleDie } from "../../simulation/dice/SingleDie"

@Component({
  selector: 'app-simulation-output',
  imports: [ MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule ],
  templateUrl: './simulation-output.component.html',
  styleUrl: './simulation-output.component.css'
})
export class SimulationOutputComponent {
  dice: Dice;

  constructor() {
    this.dice = SingleDie.D20;
  }
}
