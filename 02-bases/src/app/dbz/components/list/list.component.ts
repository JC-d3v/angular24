import { Component, Input } from '@angular/core';
import { Character } from '../../intefaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100
    }
  ]


  onDelete(): number {
    return
  }


  onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del Personaje;
    console.log(`Jio Msg: elem:Index val:`, index);

  }


}
