import { Food } from './../food/food';
import { Fooddisplay } from './../interfaces/fooddisplay';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiaryComponent } from '../diary/diary.component';
//import {Fooddisplay} from '../interfaces/fooddisplay';
import {SearchfoodsService} from '../services/searchfoods.service';
@Component({
  selector: 'app-foodinput',
  templateUrl: './foodinput.component.html',
  styleUrls: ['./foodinput.component.css']
})

export class FoodinputComponent implements OnInit {
  InputFood:string = "";
  //Fooddisplay: any;
  private data: any = []
  DisplayFoods: Fooddisplay[] = [];
  nutrients: Fooddisplay[] = [];

  constructor(private SearchfoodsService: SearchfoodsService) { }

  ngOnInit(): void {
  }


  onClick() {
    console.log(this.InputFood)
    // this.SearchfoodsService.getFood(this.InputFood).subscribe(response => {
    //   //this.data = response;

    //   console.log(response);


    // });
    this.SearchfoodsService.getFood(this.InputFood).subscribe((response) => {
      this.data = response;
      // this.Fooddisplay = data;
      // console.log(this.Fooddisplay['food']);
      console.log(this.data['foods'][0]['description']);
      console.log(this.data['foods'][0]['foodNutrients'])
      this.DisplayFoods= this.data['foods'][0]['foodNutrients'];
      // console.log(this.DisplayFoods)
      // for (let i =0; i<this.DisplayFoods.length; i++){

      //   console.log(this.DisplayFoods[i])
      // }

      return this.DisplayFoods;


    });





  }



}
