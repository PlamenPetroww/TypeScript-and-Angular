import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  fetchSingleUsers(id:number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  fetchUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
