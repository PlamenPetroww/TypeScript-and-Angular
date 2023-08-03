

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lesson } from './types/lessons';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private appUrl: string;
  private offerIdSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    this.appUrl = environment.appUrl;
  }

  getOfferIdSubject() {
    return this.offerIdSubject.asObservable();
  }

  setOfferId(offerId: string | null) {
    this.offerIdSubject.next(offerId);
  }

  getLesson(lessonId: string) {
    return this.http.get<Lesson>(`${this.appUrl}/lessons/${lessonId}.json`);
  }

  getLessons() {
    return this.http.get<Lesson[]>(`${this.appUrl}/lessons.json`);
  }

  deleteLessonById(lessonId: string) {
    return this.http.delete<Lesson>(`${this.appUrl}/lessons/${lessonId}.json`);
  }

  createLesson(
    title: string,
    img: string,
    description: string,
    duration: string,
    price: string
  ) {
    return this.http.post<Lesson>(`${this.appUrl}/lessons.json`, {
      title,
      img,
      price,
      duration,
      description,
    });
  }

  editLesson(lessonId: string, updatedLessonData: Partial<Lesson>) {
    const bodyData = {
      title: updatedLessonData.title,
      img: updatedLessonData.img,
      description: updatedLessonData.description,
      duration: updatedLessonData.duration,
      price: updatedLessonData.price
    };
  
    return this.http.put<Lesson>(`${this.appUrl}/lessons/${lessonId}.json`, bodyData);
  }
  
  
}
