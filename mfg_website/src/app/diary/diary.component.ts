import { FoodNutrient } from './../interfaces/food-nutrient';
import { FoodSearchCriteria } from './../interfaces/food-search-criteria';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
//import { FoodNutrient } from '../interfaces/food-nutrient';
import { SearchfoodsService } from '../services/searchfoods.service';
import {Food} from '../interfaces/food';
import { Observable, of } from 'rxjs';
import { FoodInputSearch } from '../interfaces/food-input-search';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  @Output() onSearchFoods: EventEmitter<any> = new EventEmitter();


  FoodSearchCriteria: FoodSearchCriteria[] = [];
  FoodNutrient: FoodNutrient[] = [];
  //Food: Food[] = [];
  constructor( private SearchfoodsService: SearchfoodsService) { }

  // getFood(inputFood: string):void{
  //   this.SearchfoodsService.getFood(inputFood).subscribe(Food =>{
  //     this.FoodSearchCriteria = Food
  //     //this.Food.foodNutrients = Food
  //   })
  // }



  ngOnInit(): void {

  }

  // getSearches(Query:string): FoodSearchCriteria[] {
  //   return this.FoodSearchCriteria;
  // }





}

