import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getLessons(){
    const {appUrl} = environment
    return this.http.get(`${appUrl}/lessons`)
  } 
  getOffers(limit?: number){
    const {appUrl} = environment;
    const limitMaximum = limit ? `limit=${limit}` : '';
    return this.http.get(`${appUrl}/offers${limitMaximum}`);
  }

}
