import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './store/counter.reducer';

// Components
import { AppComponent } from './app.component';
import { StateCounterComponent } from './state-counter/state-counter.component';
import { StoreCounterComponent } from './store-counter/store-counter.component';

@NgModule({
  declarations: [AppComponent, StateCounterComponent, StoreCounterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
