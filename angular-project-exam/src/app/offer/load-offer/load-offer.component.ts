import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Lesson } from 'src/app/types/lessons';

@Component({
  selector: 'app-load-offer',
  templateUrl: './load-offer.component.html',
  styleUrls: ['./load-offer.component.css'],
})
export class LoadOfferComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  lesson: Lesson | undefined;

  ngOnInit(): void {
    this.showFullInfoLesson();
  }

  showFullInfoLesson(): void {
    const lessonId = this.activatedRoute.snapshot.params['lessonId'];
    this.apiService.getLesson(lessonId).subscribe((lesson) => {
      this.lesson = lesson;
    });
  }
}
