import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lesson } from './types/lessons';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // get Lessons

  getLesson(lessonId: string) {
    const { appUrl } = environment;
    return this.http.get<Lesson>(`${appUrl}/lessons/${lessonId}.json`);
  }

  getLessons() {
    const { appUrl } = environment;
    return this.http.get<Lesson[]>(`${appUrl}/lessons.json`);
  }

  // post Lessons

  createLesson(
    title: string,
    description: string,
    duration: string,
    price: string,
    // subscribers: number,
    // author: string,
    // offerId: string,
  ) {
    const { appUrl } = environment;
    return this.http.post<Lesson>(`${appUrl}/lesson.json`, {
      title,
      price,
      duration,
      description,
    });
  }
}
