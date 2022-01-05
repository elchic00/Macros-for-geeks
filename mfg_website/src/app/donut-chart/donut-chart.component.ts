import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {MultiDataSet, Label, SingleOrMultiDataSet} from 'ng2-charts';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'doughnut',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  date : Date = new Date();
  food : any = []
  macros : number[] = [0,0,0]
  loaded:boolean = false

  // Doughnut

  public doughnutChartLabels: Label[] = ['Protein(g)', 'Fat(g)', 'Carbohydrate(g)'];
  public doughnutChartData: SingleOrMultiDataSet /*Array<number[]>*/ = [
    this.macros
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit():void {
      this.sharedService.getDiaryByDate(this.userId, this.date).subscribe(entries => {
        for (var i = 0; i < entries.length; i++) {
          this.macros[0] += Number(entries[i].protein.toFixed(2))
          this.macros[1] += Number(entries[i].fats.toFixed(2))
          this.macros[2] += Number(entries[i].carbohydrates.toFixed(2))
          this.macros[0] = Number(this.macros[0].toFixed(2))
          this.macros[1] = Number(this.macros[1].toFixed(2))
          this.macros[2] = Number(this.macros[2].toFixed(2))
        }
        this.loaded = true
      })

    console.log((this.userId))
  }

  ChartOptions: ChartOptions = {
    responsive: true,
  };

  chartColors: any[] = [{
    backgroundColor:["#80af5e", "#50978d", "#a6a559"]
  }];

  get userId():number {
    return this.sharedService.userId
  }

}
