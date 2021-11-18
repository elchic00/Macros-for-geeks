import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from 'src/food.service';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFoods().subscribe(foods => {
      this.foods = foods
      
      console.log(this.foods);
    })
    
  }

}
