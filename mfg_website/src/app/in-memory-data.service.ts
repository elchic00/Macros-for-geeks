import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})


export class InMemoryDataService implements InMemoryDbService {
  // GenerateDates():Date[] {
  //   const days:Date[] = []
  //   let today:Date = new Date();
  //   for(let i:number = 0; i < 7; i++){
  //     let currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDay() - i);
  //     days.push(currentDay);
      
  //   }
  //   return days;
  // }
  

  GenerateFood():Food[] {

    const steak:Food = {
      Food: "steak",
      Calories: 679,
      Carbohydrates: 0,
      Fats: 48,
      Protein: 62,
      Date: new Date,
      Mealtime: "lunchtime"
    };

    const banana:Food = {
      Food: "banana",
      Calories: 105,
      Carbohydrates: 27,
      Fats: 0.4,
      Protein: 1.3,
      Date: new Date,
      Mealtime: "lunchtime"
    };

    const pizza:Food = {
      Food: "pizza",
      Calories: 285,
      Carbohydrates: 36,
      Fats: 10,
      Protein: 12,
      Date: new Date,
      Mealtime: "lunchtime"
    }

    return [steak, banana, pizza];
  }

  createDb() {
    const foods:Food[] = this.GenerateFood();
    return {foods};
  }

  //genid?
}