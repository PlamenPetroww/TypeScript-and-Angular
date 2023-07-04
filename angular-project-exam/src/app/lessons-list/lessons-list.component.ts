import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent {

  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = false;
  }

}
