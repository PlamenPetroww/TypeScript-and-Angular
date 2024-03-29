import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //THEMES
  getTheme(id: string) {
    const {apiUrl} = environment
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getThemes() {
    const {apiUrl} = environment
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPosts(limit?: number) {
    const {apiUrl} = environment
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }

  //POSTS
  
  createTheme(
    themeName: string,
    postText: string
  ) {
    return this.http.post<Theme>('/api/themes', {themeName, postText});
  }

}
