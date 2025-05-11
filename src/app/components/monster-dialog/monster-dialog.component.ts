import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export interface Monster {
  name: string;
  type: string;
  hp: number;
  ac: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

@Component({
  selector: 'app-monster-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './monster-dialog.component.html',
  styleUrl: './monster-dialog.component.css'
})
export class MonsterDialogComponent {
  monsterTypes = [
    {
      type: 'Goblin',
      stats: { hp: 5, ac: 12, strength: 10, dexterity: 12, constitution: 12, intelligence: 9, wisdom: 9, charisma: 7 }
    },
    {
      type: 'Minotaur',
      stats: { hp: 76, ac: 14, strength: 18, dexterity: 11, constitution: 16, intelligence: 6, wisdom: 16, charisma: 9 }
    },
    {
      type: 'Vampire',
      stats: { hp: 144, ac: 16, strength: 18, dexterity: 18, constitution: 18, intelligence: 17, wisdom: 15, charisma: 18 }
    }
  ];

  selectedMonster: Monster = {
    name: '',
    type: '',
    hp: 0,
    ac: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  };

  constructor(private dialogRef: MatDialogRef<MonsterDialogComponent>) {}

  onMonsterTypeChange(type: string): void {
    const monster = this.monsterTypes.find(m => m.type === type);
    if (monster) {
      this.selectedMonster = {
        ...this.selectedMonster,
        type: monster.type,
        ...monster.stats
      };
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.selectedMonster.name && this.selectedMonster.type) {
      this.dialogRef.close(this.selectedMonster);
    }
  }
}