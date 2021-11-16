import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    

    let WeekMacros:any = [];
    for(let i:number = 0; i < 7; i++){

    }



    return WeekMacros;
  }
}