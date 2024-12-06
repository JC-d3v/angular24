import { Component, Input, output, EventEmitter, Output } from '@angular/core';
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

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void {

    if (!id) return;

    console.log({ id });

    // TODO: Emitir el ID del Personaje;
    this.onDelete.emit(id);

  }


}
