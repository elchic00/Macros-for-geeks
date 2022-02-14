import { NutrientInfo } from '../interfaces/nutrientInfo';
import { Food } from '../interfaces/food';
import { Component, OnInit, Input, Output } from '@angular/core';
import { SearchfoodsService } from '../services/searchfoods.service';
import { SharedService } from '../services/shared.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-foodinput',
  templateUrl: './foodinput.component.html',
  styleUrls: ['./foodinput.component.css']
})

export class FoodinputComponent implements OnInit {
  InputFood: string = "";
  data: any = []
  NutrientDis: NutrientInfo[] = [];
  description: string = "";
  FoodCategory: string = "";
  food =  new Food();
  mealTime : any[] = []
  serving: number = 1
  selected = "Breakfast"
  loaded : boolean = false
  results: any = []

  res(e:any){
    console.log(e.target.value)
  }

  update(e : any){
    this.selected = e.target.value
  }

  constructor(private cookieService: CookieService, private SearchfoodsService: SearchfoodsService, private sharedService: SharedService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.sharedService.getMeal().subscribe(meals => { this.mealTime = meals;})
  }

  searchFood() {
    if (this.InputFood) {
      this.SearchfoodsService.getFood(this.InputFood).subscribe((response) => {
        this.data = response;
        this.description = this.data['foods'][0].description
        this.FoodCategory = this.data['foods'][0].foodCategory
        for (var i = 0; i < this.data['foods'].length ;i++){
          this.results.push( this.data['foods'][i].description)
        }
        this.NutrientDis = this.data['foods'][0]['foodNutrients'] ;
        this.NutrientDis = this.NutrientDis.filter(x => x.nutrientName == 'Total lipid (fat)' && x.unitName == 'G' || x.nutrientName == 'Carbohydrate, by difference' && x.unitName == 'G' || x.nutrientName == 'Protein' && x.unitName == 'G' || x.nutrientName == 'Energy'  && x.unitName == 'KCAL')
        this.NutrientDis.sort((a, b) => a.nutrientName.toLowerCase().localeCompare(b.nutrientName.toLowerCase()))
      })}
    else {
      Swal.fire('No Bueno','Please enter a food item to search!', 'error')
    }
    this.loaded = true
    this.results = []
  }

  /**
   * @remarks
   * This method will post all food info to the database
   * Must have food info from USDA food api before making the api request to our database.
   */
  PostFoods() {
    if(this.InputFood)
      this.food.food = this.description[0].toUpperCase() + this.description.substr(1).toLowerCase();
    this.food.servings = this.serving
    this.food.calories = (this.NutrientDis[1].value * this.serving); //this.DisplayFoods.filter(x => nutri)
    this.food.carbohydrates = Number((this.NutrientDis[0].value * this.serving).toFixed(2));
    this.food.fats = Number((this.NutrientDis[3].value * this.serving).toFixed(2));
    this.food.protein = Number((this.NutrientDis[2].value * this.serving).toFixed(2));
    this.food.date = new Date().toDateString(); //currentDateTime
    this.food.userId = Number(this.cookieService.get('id'))
    this.food.mealTime = this.selected
    this.sharedService.addEntry(this.food).subscribe(
      response => Swal.fire("Good job!", "You posted your food info!", "success"),
      error => Swal.fire('Oops...','Your food did not post!', 'error')
    )
    this.serving = 1
  }


}
