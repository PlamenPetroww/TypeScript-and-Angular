import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-and-forms';

  isShown: boolean = true

  toggle(): void {
    this.isShown = !this.isShown;
  }
}
