import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lesson } from '../types/lessons';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  lessonList: Lesson[] = [];
  lessonArray: Lesson[] = [];
  isLoading: boolean = true;
  offerId: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLessons().subscribe({
      next: (offers) => {
        this.lessonList = offers;
        this.lessonArray = Object.values(this.lessonList);
        this.offerId = Object.keys(this.lessonList)
        console.log(offers)
        console.log(this.offerId)
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = true;
        console.log(`Error: ${error}`);
      },
    });
  }

  /* ngOnInit(): void {
    this.apiService.getLessons().subscribe({
      next: (lesson) => {
        const lessonArray = Object.values(lesson);
        this.lessonList = lessonArray.map((item) => ({
          ...item,
          lessonId: uuidv4()
        }));
        this.lessonArray = Object.values(this.lessonList);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = true;
        console.log(`Error: ${error}`);
      },
    });
  } */

}
