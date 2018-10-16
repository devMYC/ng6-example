import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post, User } from './typings';
const API_HOST = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(`${API_HOST}/posts`) as Observable<Post[]>;
  }

  getUser(id: number): Observable<User> {
    /* tslint:disable-next-line triple-equals */
    const [ user ] = this.users && this.users.filter(u => u.id == id) || [ null ];
    return user ? of(user) : this.http.get(`${API_HOST}/users/${id}`) as Observable<User>;
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${API_HOST}/users`) as Observable<User[]>;
  }

}
