import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartType, ChartOptions} from 'chart.js';
import { DatePipe } from '@angular/common';
import {SharedService} from "../services/shared.service";
import {BaseChartDirective, Colors} from "ng2-charts";
import { CookieService} from 'ngx-cookie-service';


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
  carbGoal = [0,0,0,0,0,0,0]
  proteinGoal = [0,0,0,0,0,0,0]
  fatGoal = [0,0,0,0,0,0,0]

  // Chart info
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  public barChartLabels: any = this.pastWeek;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: any[] = [
    { data: this.proteins, label: 'Proteins(g)'},
    { data: this.fats, label: 'Fats(g)'},
    { data: this.carbs, label: 'Carbohydrates(g)'},
    { "data": this.proteinGoal , "label": "Protein goal(g)", "type": "line", 'radius':'0', 'fill':'false',backgroundColor:["#80af5e"], borderColor: ['#80af5e'] },
    { "data": this.carbGoal, "label": "Fat goal(g)", "type": "line", 'radius':'0', 'fill':'false',backgroundColor:['#50978d'],borderColor: ['#50978d'] },
    { "data": this.fatGoal, "label": "Carb goal(g)", "type": "line", 'radius':'0', 'fill':'false', backgroundColor:['#a6a559'],borderColor: ['#a6a559'] },
  ];
  chartColors: Colors[] = [
    {backgroundColor:["#80af5e","#80af5e","#80af5e","#80af5e","#80af5e","#80af5e","#80af5e"]},
    {backgroundColor:["#50978d","#50978d","#50978d","#50978d","#50978d","#50978d","#50978d"]},
    {backgroundColor:["#a6a559","#a6a559","#a6a559","#a6a559","#a6a559","#a6a559","#a6a559"]}

  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    spanGaps:true,
  };

  constructor(private http: HttpClient,private datePipe: DatePipe,private sharedService: SharedService, private cookieService: CookieService) {}

  ngOnInit(){
    this.getMacros()
    this.getDates()
    this.getGoals()
    // used to refresh with the chart with the new data from the api
    setTimeout(() => {
      this.chart.chart.update() // This re-renders the canvas element.
    }, 350);
  }

  getGoals(){
    this.sharedService.getUser(this.userId).subscribe(user => {
      for(let i = 0; i < 7; i++) {
        this.proteinGoal[i] = user.proteinGoal
        this.carbGoal[i] = user.carbohydrateGoal
        this.fatGoal[i] = user.fatGoal
      }
    })
  }

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
    /* Put Macros for each date over the last 7 days into their own array with for loops.
       Can make much simpler once API can get past week of entries. */
    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[0] += Number(entries[i].protein.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[1] += Number(entries[i].protein.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[2] += Number(entries[i].protein.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[3] += Number(entries[i].protein.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[4] += Number(entries[i].protein.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[5] += Number(entries[i].protein.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.proteins[6] += Number(entries[i].protein.toFixed(0))}})

    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[0] += Math.round(entries[i].fats)}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[1] += Math.round(entries[i].fats)}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[2] += Math.round(entries[i].fats)}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[3] += Math.round(entries[i].fats)}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[4] += Math.round(entries[i].fats)}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[5] += Math.round(entries[i].fats)}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.fats[6] += Math.round(entries[i].fats)}})

    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[0] += Number(entries[i].carbohydrates.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[1] += Number(entries[i].carbohydrates.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[2] += Number(entries[i].carbohydrates.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[3] += Number(entries[i].carbohydrates.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[4] += Number(entries[i].carbohydrates.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[5] += Number(entries[i].carbohydrates.toFixed(0))}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[6] += Math.round(entries[i].carbohydrates)
      }})
    this.loaded = true
  }

  get userId():number {
    return Number(this.cookieService.get('id'))
  }

}
