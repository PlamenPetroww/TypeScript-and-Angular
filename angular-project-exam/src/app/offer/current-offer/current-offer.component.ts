import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Lesson } from 'src/app/types/lessons';
import {FormBuilder, Validators, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-current-offer',
  templateUrl: './current-offer.component.html',
  styleUrls: ['./current-offer.component.css'],
})
export class CurrentOfferComponent implements OnInit {


  form = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(4)]],
    description: ["", [Validators.required, Validators.minLength(10)]],
    duration: ["", [Validators.required, Validators.max(15), Validators.min(2)]],
    price: ["", [Validators.required, Validators.max(1000), Validators.min(50)]],
  });
  
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    ) {}

    lesson: Lesson | undefined;

  ngOnInit(): void {
    this.fetchLesson();
  }

  fetchLesson(): void {
    const lessonId = this.activatedRoute.snapshot.params['lessonId'];
    this.apiService.getLesson(lessonId).subscribe((lesson) => {
      this.lesson = lesson;
    });
  }

  edit(): void {
    if(this.form.invalid) {
      return;
    }
  }

}
