import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lesson } from '../types/lessons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
})
export class LessonsListComponent implements OnInit {
  lessonList: Lesson[] = [];
  lessonArray: Lesson[] = [];
  isLoading: boolean = true;
  offerId: any;
  lessonId: any;
  lesson: Lesson | undefined;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getLessons().subscribe({
      next: (offers) => {
        this.lessonList = offers;
        this.lessonArray = Object.values(this.lessonList);
        this.offerId = Object.keys(this.lessonList);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = true;
        console.log(`Error: ${error}`);
      },
    });
  }
  onDeleteHandler(offerId: string): void {
    if (confirm('Are you sure you want to delete this lesson?')) {
      this.apiService.deleteLessonById(offerId).subscribe(()=> {
        this.router.navigate(['/'])
      });
    }
  }
}
