import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-counter',
  templateUrl: './state-counter.component.html',
})
export class StateCounterComponent {
  stateCounter: number = 0;

  stateIncrement(): void {
    this.stateCounter++;
  }

  stateDecrement(): void {
    this.stateCounter--;
  }

  stateReset(): void {
    this.stateCounter = 0;
  }
}
