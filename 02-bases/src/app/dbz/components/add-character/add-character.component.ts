import { Component } from '@angular/core';
import { Character } from '../../intefaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(`Jio Msg: elem:this.character val:`, this.character);

  }
}
