import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MonsterDialogComponent } from '../monster-dialog/monster-dialog.component';

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
  standalone: true,
  imports: [ 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule,
    MatDialogModule,
    MonsterDialogComponent
  ],
  templateUrl: './monster-dashboard.component.html',
  styleUrl: './monster-dashboard.component.css'
})
export class MonsterDashboardComponent {
  constructor(private dialog: MatDialog) {}

  displayedColumns = ['name', 'hp', 'ac', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  datasource = MONSTER_DATA;

  openAddMonsterDialog(): void {
    const dialogRef = this.dialog.open(MonsterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datasource = [...this.datasource, result];
      }
    });
  }

  removeLastMonster(): void {
    if (this.datasource.length > 0) {
      this.datasource = this.datasource.slice(0, -1);
    }
  }
}