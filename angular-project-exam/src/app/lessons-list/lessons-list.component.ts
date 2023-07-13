import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lesson } from '../types/lessons';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  offerList: Lesson[] = [];
  offerArray: Lesson[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLessons().subscribe({
      next: (offers) => {
        this.offerList = offers;
        this.offerArray = Object.values(this.offerList);
        console.log(offers)
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = true;
        console.log(`Error: ${error}`);
      },
    });
  }

}
