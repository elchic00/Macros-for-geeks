import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CookieService} from 'ngx-cookie-service';
import Swal from "sweetalert2";
import { DatePipe } from '@angular/common'
import {Food} from "../interfaces/food";

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  foods: any = [];
  userID: number = Number(this.cookieService.get('id'))
  date : Date = new Date();
  loaded : boolean = false;
  protPerc : number = 0
  fatPerc : number = 0
  carbPerc : number= 0
  total : number = 0
  //headDate : any =  this.datepipe.transform(this.date, 'dd-mm-yyyy');


  constructor(private sharedService: SharedService, private cookieService: CookieService, public datepipe: DatePipe) { }
  ngOnInit(): void {
    this.loadMacs()
  }

  loadMacs() {
    if(this.foods && this.userID){
      this.sharedService.getDiaryByDate(this.userID, this.date).subscribe(data => {
        this.foods = data;
        console.log(this.foods)
        //get percentages
        for(var i = 0; i < this.foods.length; i++){
          this.total += this.foods[i].protein + this.foods[i].fats + this.foods[i].carbohydrates
        }
        for(var i = 0; i < this.foods.length; i++){
          this.protPerc += this.foods[i].protein
          this.fatPerc += this.foods[i].fats
          this.carbPerc += this.foods[i].carbohydrates
        }
        this.protPerc = this.protPerc / this.total * 100
        this.fatPerc = this.fatPerc / this.total * 100
        this.carbPerc = this.carbPerc / this.total * 100
      })
      this.loaded = true;
    }
  }


  deleteEntry(entry: number){
    Swal.fire({
      title: 'Do you want to delete this entry?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.sharedService.deleteDiary(entry).subscribe(
          res =>
            Swal.fire('Deleted!', '', 'success'),
          error => Swal.fire('Changes were not made', '', 'error')
        )
        this.loadMacs()
        this.ngOnInit();
      } else if (result.isDenied) {
        Swal.fire("Changes weren't made", '', 'info')
      }
    })
  }


}
