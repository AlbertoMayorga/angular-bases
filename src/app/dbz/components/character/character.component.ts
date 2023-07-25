import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power:0
  };

  emitCharacter():void{
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {id:uuid(), name:'', power:0};
  }
}
