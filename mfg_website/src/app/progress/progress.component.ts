import { HttpClient } from '@angular/common/http';
import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChartType, ChartDataSets, ChartOptions} from 'chart.js';
import { DatePipe } from '@angular/common';
import {SharedService} from "../services/shared.service";
import {BaseChartDirective, Colors, MultiDataSet, SingleDataSet, SingleOrMultiDataSet} from "ng2-charts";


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  private pastWeek : string[] = [];
  date : Date = new Date();
  private proteins : number[] = [0,0,0,0,0,0,0]
  private fats : number[] = [0,0,0,0,0,0,0]
  private carbs: number[] = [0,0,0,0,0,0,0]
  loaded = false;
  barchart:any;

  //@ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

public barChartLabels: any = this.pastWeek;
public barChartType: ChartType = 'bar';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: any[] = [
    { data: this.proteins, label: 'Proteins',backgroundColor:"#75DBCD" },
    { data: this.fats, label: 'Fats', backgroundColor:"#C9DBBA" },
    { data: this.carbs, label: 'Carbohydrates',backgroundColor:"#DCDBA8" }
  ];

  chartColors: Colors[] = [
    {backgroundColor:["#75DBCD","#75DBCD","#75DBCD","#75DBCD","#75DBCD","#75DBCD","#75DBCD"]},
    {backgroundColor:["#C9DBBA","#C9DBBA","#C9DBBA","#C9DBBA","#C9DBBA","#C9DBBA","#C9DBBA"]},
    {backgroundColor:["#DCDBA8","#DCDBA8","#DCDBA8","#DCDBA8","#DCDBA8","#DCDBA8","#DCDBA8"]}
  ];

  constructor(private http: HttpClient,private datePipe: DatePipe,private sharedService: SharedService) { }

  ngOnInit(){
    //this.chart.chart.data.datasets[0].= [55, 355, 35, 50, 50, 60, 10]

    this.getDates()
    this.getMacros()
    this.forceChartRefresh()
  }

  forceChartRefresh() {
    setTimeout(() => {
      //this.chart.chart.update();
    }, 2);
  }


/*  fixPrecision(){
    for(let i = 0; i < this.proteins.length; i++){
      this.proteins[i] = Number(this.proteins[i].toFixed(1))
      this.fats[i] = Number(this.fats[i].toFixed(2))
      this.carbs[i] = Number(this.carbs[i].toFixed(2))
    }
}*/

  getDates(){
    for(let i = 0; i < 7; i++){
      let currentDate: Date = new Date();
      currentDate.setDate(currentDate.getDate() - i);
      this.pastWeek.push(currentDate.toDateString());
    }
    this.pastWeek.reverse();
  }

  getMacros(){
    // Get each date for the last 7 days in order to call them from the database.
    var myCurrentDate=new Date();
    var sevdays=new Date(myCurrentDate);
    sevdays.setDate(sevdays.getDate() - 7);
    var sixdays=new Date(myCurrentDate);
    sixdays.setDate(sixdays.getDate() - 6);
    var fivedays=new Date(myCurrentDate);
    fivedays.setDate(fivedays.getDate() - 5);
    var fourdays=new Date(myCurrentDate);
    fourdays.setDate(fourdays.getDate() - 4);
    var threedays=new Date(myCurrentDate);
    threedays.setDate(threedays.getDate() - 3);
    var twodays=new Date(myCurrentDate);
    twodays.setDate(twodays.getDate() - 2);
    //Put Macros for each date over the last 7 days into their own array.
    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[0] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[1] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[2] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[3] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[4] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[5] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[6] += entries[i].protein}})

    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[0] += entries[i].fats}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[1] += entries[i].fats}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[2] += entries[i].fats}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[3] += entries[i].fats}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[4] += entries[i].fats}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[5] += entries[i].fats}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[6] += entries[i].fats}})

    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[0] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[1] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[2] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[3] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[4] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[5] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[6] += Number(entries[i].carbohydrates.toFixed(2))}})
    this.loaded = true
    console.log()
  }

  get userId():number {
    return this.sharedService.userId
  }

}
