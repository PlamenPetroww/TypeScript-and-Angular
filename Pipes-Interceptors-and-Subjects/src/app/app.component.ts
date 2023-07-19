import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    username: 'Plamen',
    age: 12,
    list: [1, 2, 3, 4, 5, 7, 8],
  };

  sum(a: number, b: number): number {
    return a + b
  }
}
