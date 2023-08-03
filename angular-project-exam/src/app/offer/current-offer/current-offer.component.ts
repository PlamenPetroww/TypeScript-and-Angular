import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Lesson } from 'src/app/types/lessons';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-current-offer',
  templateUrl: './current-offer.component.html',
  styleUrls: ['./current-offer.component.css'],
})
export class CurrentOfferComponent implements OnInit {

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    duration: ['', [Validators.required, Validators.max(15), Validators.min(2)]],
    price: ['', [Validators.required, Validators.max(1000), Validators.min(50)]],
  });

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  lessonId!: string; // Добавете "!" след lessonId за да го отбележите като "definitely assigned"

  lesson: Lesson | undefined;

  ngOnInit(): void {
    this.lessonId = this.activatedRoute.snapshot.params['lessonId']; // Присвояване на стойност на lessonId при инициализацията на компонента
    this.fetchLesson();
  }

  fetchLesson(): void {
    this.apiService.getLesson(this.lessonId).subscribe((lesson) => {
      this.lesson = lesson;
      console.log(lesson);
    });
  }

  editHandler(lesson: Lesson) {
    console.log(lesson)
    this.apiService.editLesson(this.lessonId, lesson).subscribe(() => {
      this.fetchLesson();
      console.log(lesson)
      this.router.navigate(['/']);
    });
  }
}
