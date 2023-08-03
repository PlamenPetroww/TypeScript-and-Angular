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
    duration: [
      '',
      [Validators.required, Validators.max(15), Validators.min(2)],
    ],
    price: [
      '',
      [Validators.required, Validators.max(1000), Validators.min(50)],
    ],
  });

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  lesson: Lesson | undefined;

  ngOnInit(): void {
    this.fetchLesson();
  }

  fetchLesson(): void {
    const lessonId = this.activatedRoute.snapshot.params['lessonId'];
    this.apiService.getLesson(lessonId).subscribe((lesson) => {
      this.lesson = lesson;
      console.log(lesson);
    });
  }

  edit(): void {
    if (this.form.invalid) {
      return;
    }

    const { title, img, description, duration, price } = this.form.value as {
      title: string;
      img: string;
      description: string;
      duration: string;
      price: string;
    };

    this.apiService.editLesson(title, img, description, duration, price).subscribe(() => {
      this.router.navigate(['/lessons'])
    })
  }
}
