import { NutrientDisplay } from './../interfaces/nutrientDisplay';
import { Food } from '../interfaces/food';
//import { Meals } from '../interfaces/meals';
import { Component, OnInit, Input, Output } from '@angular/core';
import { SearchfoodsService } from '../services/searchfoods.service';
import { SharedService } from '../services/shared.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-foodinput',
  templateUrl: './foodinput.component.html',
  styleUrls: ['./foodinput.component.css']
})

export class FoodinputComponent implements OnInit {
  InputFood: string = "";
  data: any = []
  NutrientDis: NutrientDisplay[] = [];
  description: string = "";
  FoodCategory: string = "";
  food = new Food();
  mealTime : any[] = []

  selected = "Breakfast"

  update(e : any){
    this.selected = e.target.value
  }

  constructor(private SearchfoodsService: SearchfoodsService, private sharedService: SharedService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.sharedService.getMeal().subscribe(meals => { this.mealTime = meals; console.log(this.mealTime);})
  }

  onClick() {
    if (this.InputFood) {
      this.SearchfoodsService.getFood(this.InputFood).subscribe((response) => {
        this.data = response;
        this.description = this.data['foods'][0].description
        this.FoodCategory = this.data['foods'][0].foodCategory
        this.NutrientDis = this.data['foods'][0]['foodNutrients'];
        this.NutrientDis = this.NutrientDis.filter(x => x.nutrientName == 'Total lipid (fat)' || x.nutrientName == 'Carbohydrate, by difference' || x.nutrientName == 'Protein' || x.nutrientName == 'Energy')
     })}
    else {
      alert("enter Food")
    }
  }

  PostFoods() {
    if(this.InputFood)
    this.food.Food = this.description[0].toUpperCase() + this.description.substr(1).toLowerCase();
    this.food.Calories = Math.round(this.NutrientDis[3].value) //this.DisplayFoods.filter(x => nutri)
    this.food.Carbohydrates = Math.round(this.NutrientDis[2].value)
    this.food.Fats = Math.round(this.NutrientDis[1].value);
    this.food.Protein = Math.round(this.NutrientDis[0].value);
    this.food.Date = new Date().toDateString(); //currentDateTime
    this.food.UserId = this.userId
    console.log(this.selected)
    this.food.Mealtime = this.selected
    this.sharedService.addEntry(this.food).subscribe(
      response => {Swal.fire("Good job!", "You posted your food info!", "success")},
      error => {Swal.fire('Oops....','Your food did not post!', 'error')}
    )}

  get userId():number {
    return this.sharedService.userId
  }

}
