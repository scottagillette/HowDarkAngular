import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component';

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

const PLAYER_DATA: Creature[] = [
  { name: "Karn Crabclaw", hp: 7, ac: 15, strength: 15, dexterity: 14, constitution: 14, intelligence: 14, wisdom: 11, charisma: 14 },
  { name: "Kabsal Argent", hp: 7, ac: 12, strength: 15, dexterity: 9, constitution: 12, intelligence: 10, wisdom: 17, charisma: 12 },
  { name: "Fennick Quickfoot", hp: 6, ac: 14, strength: 11, dexterity: 18, constitution: 13, intelligence: 11, wisdom: 10, charisma: 7 },
  { name: "Alderon", hp: 2, ac: 11, strength: 8, dexterity: 13, constitution: 12, intelligence: 16, wisdom: 10, charisma: 8 },
];

@Component({
  selector: 'app-player-dashboard',
  standalone: true,
  imports: [ 
    CommonModule,
    MatButtonModule, 
    MatCardModule, 
    MatTableModule,
    MatCheckboxModule
  ],
  templateUrl: './player-dashboard.component.html',
  styleUrl: './player-dashboard.component.css'
})
export class PlayerDashboardComponent {
  constructor(private dialog: MatDialog) {}

  displayedColumns = ['select', 'name', 'hp', 'ac', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  datasource = PLAYER_DATA;
  selection = new SelectionModel<Creature>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.length;
    return numSelected === numRows;
  }

  toggleAllPlayers() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.datasource);
  }

  removeSelectedPlayers() {
    const selectedPlayers = new Set(this.selection.selected);
    this.datasource = this.datasource.filter(player => !selectedPlayers.has(player));
    this.selection.clear();
  }

  openAddPlayerDialog(): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datasource = [...this.datasource, result];
      }
    });
  }
}