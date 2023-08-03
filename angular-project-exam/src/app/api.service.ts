/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lesson } from './types/lessons';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    this.appUrl = environment.appUrl
  };

  

  // get Lessons

  getLesson(lessonId: string) {
    return this.http.get<Lesson>(`${this.appUrl}/lessons/${lessonId}.json`);
  }

  getLessons() {
    const { appUrl } = environment;
    return this.http.get<Lesson[]>(`${appUrl}/lessons.json`);
  }

  deleteLessonById(lessonId: string) {
    const { appUrl } = environment;
    return this.http.delete<Lesson>(`${appUrl}/lessons/${lessonId}.json`)
  }

  // post Lessons

  createLesson(
    title: string,
    img: string,
    description: string,
    duration: string,
    price: string
    // subscribers: number,
    // author: string,
    // offerId: string,
  ) {
    const { appUrl } = environment;
    return this.http.post<Lesson>(`${appUrl}/lessons.json`, {
      title,
      img,
      price,
      duration,
      description,
    });
  }

  editLesson() {

  }
}
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lesson } from './types/lessons';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private appUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = environment.appUrl;
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

  editLesson(
    /* title: string,
    img: string,
    description: string,
    duration: string,
    price: string */
    lessonId: string, editedData: Partial<Lesson>
  ) {
    return this.http.patch<Lesson>(`${this.appUrl}/lessons/${lessonId}.json`, editedData);
  }
}
