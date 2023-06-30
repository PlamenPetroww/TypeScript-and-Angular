import { Component } from '@angular/core';

@Component({
  selector: 'app-input-navigate',
  templateUrl: './input-navigate.component.html',
  styleUrls: ['./input-navigate.component.css']
})
export class InputNavigateComponent {
  addName() {
    console.log('click')
  }
}
