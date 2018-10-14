import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_HOST = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${API_HOST}/posts`);
  }

  getUser(id: number) {
    return this.http.get(`${API_HOST}/users/${id}`);
  }

  getUsers() {
    return this.http.get(`${API_HOST}/users`);
  }

}
