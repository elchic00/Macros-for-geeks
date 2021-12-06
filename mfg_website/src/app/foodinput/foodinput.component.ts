import { NutrientDisplay } from './../interfaces/nutrientDisplay';
import { Food } from './../food/food';
import { Fooddisplay } from './../interfaces/fooddisplay';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiaryComponent } from '../diary/diary.component';
import {SearchfoodsService} from '../services/searchfoods.service';
import {SharedService} from '../shared.service';
import { VirtualTimeScheduler } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-foodinput',
  templateUrl: './foodinput.component.html',
  styleUrls: ['./foodinput.component.css']
})

export class FoodinputComponent implements OnInit {
  InputFood:string = "";
  //Fooddisplay: any;
  data: any = []
  NutrientDis: NutrientDisplay[] = [];
  description: string = "";
  FoodCategory: string = "";
  // foods: Food[] = [];
  food = new Food();


  constructor(private SearchfoodsService: SearchfoodsService, private sharedService: SharedService, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  onClick() {
    if(this.InputFood){
      this.SearchfoodsService.getFood(this.InputFood).subscribe((response) => {
        this.data = response;
        this.description = response['foods'][0].description
        this.FoodCategory = response['foods'][0].foodCategory
        this.NutrientDis = this.data['foods'][0]['foodNutrients'];
        this.NutrientDis = this.NutrientDis.filter(x => x.nutrientName == 'Total lipid (fat)'|| x.nutrientName == 'Carbohydrate, by difference' || x.nutrientName == 'Protein'|| x.nutrientName == 'Energy')
        console.log(this.NutrientDis)
      });
    }
    else{
      alert("enter Food")
    }

  }

  //TODO
  PostFoods(){
    this.food.Food = this.description;
    this.food.Calories = Math.round(this.NutrientDis[3].value) //this.DisplayFoods.filter(x => nutri)
    this.food.Carbohydrates = Math.round(this.NutrientDis[2].value)
    this.food.Fats = Math.round(this.NutrientDis[1].value);
    this.food.Protein = Math.round(this.NutrientDis[0].value);
    // let currentDateTime =this.datepipe.transform((new Date), 'MM-dd-yyyy');
    this.food.Date = new Date().toDateString();
    this.food.Mealtime = 'Breakfast';
    this.sharedService.addEntry(this.food).subscribe(food => console.log(food))
    console.log("post button works")
  }



}


