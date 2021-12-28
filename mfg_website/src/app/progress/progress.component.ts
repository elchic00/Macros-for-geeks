import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DonutChartComponent} from "../donut-chart/donut-chart.component";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  private pastWeek : string[] = [];
  date : Date = new Date();
  protiens : number[] = [0,0,0,0,0,0,0]
  fats : number[] = [0,0,0,0,0,0,0]
  carbs: number[] = [0,0,0,0,0,0,0]

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: any = this.pastWeek;

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Protiens' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fats' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Carbohydrates' }

  ];

  constructor(private http: HttpClient,private datePipe: DatePipe,private sharedService: SharedService) { }

  ngOnInit(){
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[0] += entries[i].protein
      }
    })
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[1] += entries[i].fats

      }
    })
    // this.http.post<any>('', {}).subscribe(data => {
    // })
    for(let i = 0; i < 7; i++){
      let currentDate: Date = new Date();
      currentDate.setDate(currentDate.getDate() - i);
      this.pastWeek.push(currentDate.toDateString());
      console.log(currentDate);

    }
      this.pastWeek.reverse();
  }



  get userId():number {
    console.log("userID is:" + this.sharedService.userId)
    return this.sharedService.userId
  }

}
