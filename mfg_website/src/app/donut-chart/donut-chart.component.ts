import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {MultiDataSet, Label, SingleOrMultiDataSet} from 'ng2-charts';
import {SharedService} from "../services/shared.service";
import { CookieService} from 'ngx-cookie-service';

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

  constructor(private sharedService: SharedService,private cookieService: CookieService) {
  }

  ngOnInit():void {
      this.sharedService.getDiaryByDate(Number(this.cookieService.get('id')), this.date).subscribe(entries => {
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

  }

  ChartOptions: ChartOptions = {
    responsive: true,
/*    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      },
    }*/
  };

  chartColors: any[] = [{
    backgroundColor:["#80af5e", "#50978d", "#a6a559"]
  }];


}
