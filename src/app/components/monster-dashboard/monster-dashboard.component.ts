import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface Creature {
  name: string;
  hp: number;
  ac: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

const MONSTER_DATA: Creature[] = [
  { name: "Goblin 1", hp: 5, ac: 12, strength: 10, dexterity: 12, constitution: 12, intelligence: 9, wisdom: 9, charisma: 7 },
  { name: "Goblin 2", hp: 5, ac: 12, strength: 10, dexterity: 12, constitution: 12, intelligence: 9, wisdom: 9, charisma: 7 },
];

@Component({
  selector: 'app-monster-dashboard',
  imports: [ MatButtonModule, MatCardModule, MatTableModule ],
  templateUrl: './monster-dashboard.component.html',
  styleUrl: './monster-dashboard.component.css'
})
export class MonsterDashboardComponent {
  displayedColumns = ['name', 'hp', 'ac', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  datasource = MONSTER_DATA;
}
