import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'doughnut',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  date : Date = new Date();
  data : any
  // Doughnut
  public doughnutChartLabels: Label[] = ['Protein', 'Fat', 'Carbohydrate'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]/*,
    [50, 150, 120],
    [250, 130, 70],*/
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit():void {
    this.data = this.sharedService.getDiaryByDate(this.sharedService.userId,this.date)
    console.log(this.data)
  }

  get userId():number {
    console.log("userID is:" + this.sharedService.userId)
    return this.sharedService.userId
  }


}
