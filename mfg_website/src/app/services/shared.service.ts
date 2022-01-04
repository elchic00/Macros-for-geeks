import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Food } from '../interfaces/food';
//import { Meals } from '../interfaces/meals';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "https://localhost:7062";
  userId!: number;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.APIurl + '/User')
  }

  getMeal(): Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/Meal')
  }

  getUser(id: number): Observable<User>{
    const url = `${this.APIurl}/` + "User/" + `${id}`
    return this.http.get<User>(url)
  }

  getDiaryByDate(id: number, date: Date): Observable<Food[]>{
    return this.http.get< any > (this.APIurl + '/Diary/'+ id+'/'+ date.toDateString())
  }

  addEntry(food: Food){
    // const body = JSON.stringify(food)
    return this.http.post(this.APIurl + '/Diary', food)
  }

  addUser(user: User){
    return this.http.post(this.APIurl + '/User',user)
  }

  updateUser(user: User) {
    return this.http.put(this.APIurl + '/User', user )
  }

}


