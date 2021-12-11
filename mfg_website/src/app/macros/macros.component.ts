import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
// import { FoodService } from 'src/food.service';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  foods: any = [];
  userID: number = this.userId;
  date : string = new Date().toDateString();

  constructor(private sharedService: SharedService, public datepipe: DatePipe) { }
  ngOnInit(): void {
    this.loadMacs()
  }

  loadMacs() {
    if(this.foods && this.userID){
      this.sharedService.getDiaryByDate(this.userID, this.date).subscribe(data => {
        this.foods = data; 
        console.log(this.foods)
      })
    }
  }

  get userId():number {
    console.log("userID is:" + this.sharedService.userId)
    return this.sharedService.userId
  }

}
