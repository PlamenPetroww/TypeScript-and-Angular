import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isActive = false;

  activeUsers = [{ name: 'Plamen', age: 21 },
  { name: 'Petko', age: 31 },
  { name: 'Valq', age: 41 },
  { name: 'Gosho', age: 26 },]

  handleClick() {
    this.isActive = !this.isActive;

  }

}
