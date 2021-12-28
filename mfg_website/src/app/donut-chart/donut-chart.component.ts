import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {SharedService} from "../services/shared.service";
import { Food } from '../interfaces/food';
@Component({
  selector: 'doughnut',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  date : Date = new Date();
  food : any = []
  protien : number = 0
  fat:number = 0
  carbs : number = 0
  data : number[] = [0,0,0]

  // Doughnut
  public doughnutChartLabels: Label[] = ['Protein', 'Fat', 'Carbohydrate'];
  public doughnutChartData: MultiDataSet = [
    this.data/*,
    [50, 150, 120],
    [250, 130, 70],*/
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit():void {
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      /*console.log(entries)*/
      for (var i = 0; i < entries.length ;i++){
        this.data[0] += entries[i].protein
        this.data[1] += entries[i].fats
        this.data[2] += entries[i].carbohydrates
        console.log(entries[i])
        console.log(this.data)
      };
      //const resArr = entries.Food
      this.food.push(entries)  ;})

    console.log(this.food)
  }

  get userId():number {
    console.log("userID is:" + this.sharedService.userId)
    return this.sharedService.userId
  }

}
