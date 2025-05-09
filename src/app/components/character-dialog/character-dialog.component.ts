import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export interface PlayerCharacter {
  name: string;
  hp: number;
  ac: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  weapon: string;
  damageModifier: number;
}

@Component({
  selector: 'app-character-dialog',
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
  templateUrl: './character-dialog.component.html',
  styleUrl: './character-dialog.component.css'
})
export class CharacterDialogComponent {
  character: PlayerCharacter = {
    name: '',
    hp: 1,
    ac: 10,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    weapon: 'Dagger',
    damageModifier: 0
  };

  weapons = [
    'Dagger',
    'Short Sword',
    'Long Sword',
    'Great Sword',
    'Spear',
    'Battle Axe',
    'War Hammer',
    'Mace',
    'Staff',
    'Bow'
  ];

  constructor(private dialogRef: MatDialogRef<CharacterDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.character);
  }
}