import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
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
  private protiens : number[] = [0,0,0,0,0,0,0]
  private fats : number[] = [0,0,0,0,0,0,0]
  private carbs: number[] = [0,0,0,0,0,0,0]

/*
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
*/
  public barChartLabels: any = this.pastWeek;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.protiens, label: 'Proteins' },
    { data: this.fats, label: 'Fats' },
    { data: this.carbs, label: 'Carbohydrates' }

  ];

  constructor(private http: HttpClient,private datePipe: DatePipe,private sharedService: SharedService) { }

  ngOnInit(){
    this.getMacros()
    this.getDates()

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
    //Put Macros for each date over the last 7 days into their own array.
    this.sharedService.getDiaryByDate(this.userId,sevdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[0] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[1] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[2] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[3] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[4] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[5] += entries[i].protein}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.protiens[6] += entries[i].protein}})

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
        this.carbs[0] += entries[i].carbohydrates}})
    this.sharedService.getDiaryByDate(this.userId,sixdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[1] += entries[i].carbohydrates}})
    this.sharedService.getDiaryByDate(this.userId,fivedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[2] += entries[i].carbohydrates}})
    this.sharedService.getDiaryByDate(this.userId,fourdays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[3] += entries[i].carbohydrates}})
    this.sharedService.getDiaryByDate(this.userId,threedays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[4] += entries[i].carbohydrates}})
    this.sharedService.getDiaryByDate(this.userId,twodays).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[5] += entries[i].carbohydrates}})
    this.sharedService.getDiaryByDate(this.userId,this.date).subscribe(entries => {
      for (var i = 0; i < entries.length ;i++){
        this.carbs[6] += entries[i].carbohydrates}})
  }

  get userId():number {
    return this.sharedService.userId
  }

}
