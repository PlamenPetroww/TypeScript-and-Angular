import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEditMode: boolean = false;

form = this.fb.group({
  username: ['user1'],
  email: ['email1'],
  tel: ['tel1'],

})

  constructor(private fb: FormBuilder) {}

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveProfileHandler(): void {
    this.toggleEditMode()
  }

}
