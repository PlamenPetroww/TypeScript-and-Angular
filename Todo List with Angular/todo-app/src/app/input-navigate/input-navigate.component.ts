import { Component, Input } from '@angular/core';
import { Name } from '../types/Name';

@Component({
  selector: 'app-input-navigate',
  templateUrl: './input-navigate.component.html',
  styleUrls: ['./input-navigate.component.css']
})
export class InputNavigateComponent {
  @Input('title') titleFromApp: string = '';
  title = 'Add your name hier';

  activeName: Name[] = [];

  addName(inputName: HTMLInputElement) {
    const name = {
      name: inputName.value,
    };
    this.activeName.push(name);

    inputName.value = '';
  }
}
