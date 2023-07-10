import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = false;
    this.apiService.getLessons().subscribe(lessons => {
      console.log(lessons)
    })
  }

}
