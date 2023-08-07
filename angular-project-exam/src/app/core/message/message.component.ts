import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(private snackbar: MatSnackBar) {}

  success(message: string) {
    this.snackbar.open(message, undefined, { panelClass: 'success', duration: 2000 });
  }

}
