import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../types/JsonPlaceHolderUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() users: User[] = [];

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnChanges() {
    // console.log('invoked from ngOnChanges!')
  }
  
  refresh() {
    this.cd.detectChanges();
  }
} 
