import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 35;

  get getCapitlizedName():string{
    return this.name.toUpperCase();
  }

  get getAge():number{
    return this.age;
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 30;
  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 35;
  }
}
