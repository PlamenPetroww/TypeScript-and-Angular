import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateState } from './translate-type';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent {
  message$: Observable<string>;

  constructor(private store: Store<TranslateState>) {
    this.message$ = this.store.select('message');
  }

  deutscheMsg() {
    this.store.dispatch({ type: 'DEUTSCH' });
  }

  italianischeMsg() {
    this.store.dispatch({ type: 'ITALIAN' });
  }
}
