import { NutrientDisplay } from './../interfaces/nutrientDisplay';
import { Food } from './../food/food';
import { Fooddisplay } from './../interfaces/fooddisplay';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiaryComponent } from '../diary/diary.component';

import {SearchfoodsService} from '../services/searchfoods.service';
@Component({
  selector: 'app-foodinput',
  templateUrl: './foodinput.component.html',
  styleUrls: ['./foodinput.component.css']
})

export class FoodinputComponent implements OnInit {
  InputFood:string = "";
  //Fooddisplay: any;
  data: any = []
  DisplayFoods: NutrientDisplay[] = [];
  description: string = ""
  FoodCategory: string = ""

  constructor(private SearchfoodsService: SearchfoodsService) { }

  ngOnInit(): void {
  }


  onClick() {
    console.log(this.InputFood)

    if(this.InputFood){
      this.SearchfoodsService.getFood(this.InputFood).subscribe((response) => {
        this.data = response;
        this.description = response['foods'][0].description
        this.FoodCategory = response['foods'][0].foodCategory

        this.DisplayFoods = this.data['foods'][0]['foodNutrients'];
        this.DisplayFoods = this.DisplayFoods.filter(x => x.nutrientName == 'Total lipid (fat)'|| x.nutrientName == 'Carbohydrate, by difference' || x.nutrientName == 'Protein'|| x.nutrientName == 'Energy')

        return this.DisplayFoods;


      });
    }
    else{
      alert("enter Food")
    }


  }



}
