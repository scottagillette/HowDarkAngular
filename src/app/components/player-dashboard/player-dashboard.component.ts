import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface Creature {
  name: string;
  hp: number;
  ac: number;
}

const PLAYER_DATA: Creature[] = [
  { name: "foo", hp: 8, ac: 12 },
  { name: "bar", hp: 3, ac: 10 },
];

@Component({
  selector: 'app-player-dashboard',
  imports: [ MatButtonModule, MatCardModule, MatTableModule ],
  templateUrl: './player-dashboard.component.html',
  styleUrl: './player-dashboard.component.css'
})
export class PlayerDashboardComponent {
  displayedColumns = ['name', 'hp', 'ac'];

  datasource = PLAYER_DATA;
}
