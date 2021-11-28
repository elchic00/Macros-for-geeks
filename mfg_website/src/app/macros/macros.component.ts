import { Component, OnInit } from '@angular/core';
import { Food } from '../food/food';
// import { FoodService } from 'src/food.service';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  foods: Food[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
