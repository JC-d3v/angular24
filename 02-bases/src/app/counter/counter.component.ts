import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
        <h3>counter : {{ counter }}</h3>
        <button (click)="increaseBy(2)">+2</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-2)">-2</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }


}
