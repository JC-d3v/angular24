import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedLastHero?: string;

  removeLastHero(): void {
    this.deletedLastHero = this.heroNames.pop();
    console.log(`Jio Msg: elem: this.deletedLastHero val:`, `${this.deletedLastHero}`);
  }

}
