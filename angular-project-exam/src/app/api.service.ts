import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lesson } from './types/lessons';
import { Offer } from './types/offers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getLessons(){
    const {appUrl} = environment
    return this.http.get<Lesson[]>(`${appUrl}/lessons.json`)
  } 

  /* getOffers(){
    const {appUrl} = environment
    return this.http.get<Offer[]>(`${appUrl}/offers.json`);
  } */

}
