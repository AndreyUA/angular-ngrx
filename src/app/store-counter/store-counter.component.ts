import { Component } from '@angular/core';

import { Observable } from 'rxjs';

// Store
import { Store } from '@ngrx/store';
import * as CounterActions from '../store/counter.actions';

@Component({
  selector: 'app-store-counter',
  templateUrl: './store-counter.component.html',
})
export class StoreCounterComponent {
  constructor(private store: Store<{ counter: number }>) {
    this.storeCounter = this.store.select('counter');
  }

  storeCounter!: Observable<number>;

  storeIncrement() {
    this.store.dispatch(CounterActions.increment());
  }
  storeDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }
  storeReset() {
    this.store.dispatch(CounterActions.reset());
  }
}
