import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title from App Component!';
  users = [
    { name: 'Plamen', age: 21 },
  { name: 'Petko', age: 31 },
  { name: 'Valq', age: 40 },
  { name: 'Gosho', age: 26 },
]
}
