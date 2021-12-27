import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  foods: any = [];
  userID: number = this.userId;
  date : Date = new Date();

  constructor(private sharedService: SharedService) { }
  ngOnInit(): void {
    this.loadMacs()
  }

  loadMacs() {
    if(this.foods && this.userID){
      this.sharedService.getDiaryByDate(this.userID, this.date).subscribe(data => {
        this.foods = data;
      })
    }
  }

  get userId():number {
    console.log("userID is:" + this.sharedService.userId)
    return this.sharedService.userId
  }


}
