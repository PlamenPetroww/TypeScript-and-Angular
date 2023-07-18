import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Lesson } from 'src/app/types/lessons';

@Component({
  selector: 'app-current-offer',
  templateUrl: './current-offer.component.html',
  styleUrls: ['./current-offer.component.css'],
})
export class CurrentOfferComponent implements OnInit {
  lesson: Lesson | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchLesson();
  }

  fetchLesson(): void {
    const lessonId = this.activatedRoute.snapshot.params['lessonId'];

    this.apiService.getLesson(lessonId).subscribe((lesson) => {
      this.lesson = lesson;
      console.log({ lesson });
    });
  }
}
