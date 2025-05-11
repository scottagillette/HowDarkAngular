import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { MonsterDashboardComponent } from './components/monster-dashboard/monster-dashboard.component';
import { SimulationOutputComponent } from './components/simulation-output/simulation-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDialogModule,
    PlayerDashboardComponent,
    MonsterDashboardComponent,
    SimulationOutputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'how-dark';
}