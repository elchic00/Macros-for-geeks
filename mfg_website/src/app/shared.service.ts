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

  getUser(id: any): Observable<any>{
    return this.http.get< any > (this.APIurl + '/User/'+ id)
  }

  getDiaryByDate(id: any, date: Date): Observable<any>{
    return this.http.get< any > (this.APIurl + '/user/'+ id+'/'+ date)
  }

  addEntry(food: any){
    return this.http.post(this.APIurl + '/Diary', food)
  }
}


