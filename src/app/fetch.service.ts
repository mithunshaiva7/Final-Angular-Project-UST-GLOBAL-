import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }
  getApi(){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users`);
  }
}
