import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Food } from './food/food';
import { User } from './user/user';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "https://localhost:7062";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get< User[]> (this.APIurl + '/User')
  }

  getUser(id: number): Observable<User>{
    const url = `${this.APIurl}/${id}`
    return this.http.get< any > (url)
  }

  getDiaryByDate(id: number, date: Date): Observable<Food>{
    return this.http.get< any > (this.APIurl + '/user/'+ id+'/'+ date)
  }

  addEntry(food: Food){
    // const body = JSON.stringify(food)
    return this.http.post(this.APIurl + '/Diary', food)
  }
}


