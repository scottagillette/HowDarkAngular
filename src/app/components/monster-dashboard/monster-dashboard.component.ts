import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface Creature {
  name: string;
  hp: number;
  ac: number;
}

const MONSTER_DATA: Creature[] = [
  { name: "Goblin 1", hp: 5, ac: 11 },
  { name: "Goblin 2", hp: 3, ac: 11 },
];

@Component({
  selector: 'app-monster-dashboard',
  imports: [ MatButtonModule, MatCardModule, MatTableModule ],
  templateUrl: './monster-dashboard.component.html',
  styleUrl: './monster-dashboard.component.css'
})
export class MonsterDashboardComponent {
  displayedColumns = ['name', 'hp', 'ac'];

  datasource = MONSTER_DATA;
}
