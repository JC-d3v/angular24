import { Injectable } from '@angular/core';
import { Character } from '../intefaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  constructor() { }

}