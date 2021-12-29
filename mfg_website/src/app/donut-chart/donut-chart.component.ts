import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
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

  // Doughnut
  public doughnutChartLabels: Label[] = ['Protein', 'Fat', 'Carbohydrate'];
  public doughnutChartData: SingleOrMultiDataSet /*Array<number[]>*/ = [
    this.macros
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private sharedService: SharedService) {
  }

  ngOnInit():void {
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      /*console.log(entries)*/
      for (var i = 0; i < entries.length ;i++){
        this.macros[0] += entries[i].protein
        this.macros[1] += entries[i].fats
        this.macros[2] += entries[i].carbohydrates
      }
    })
  }

  public chartOptions: any = {
    pieceLabel: {
      render: function (args: any) {
        const label = args.label,
          value = args.value;
        return label + ': ' + value;
      }
    }
  }
  chartColors: any[] = [{
    backgroundColor:["#75DBCD", "#C9DBBA", "#DCDBA8"]
  }];

  get userId():number {
    return this.sharedService.userId
  }

}
