import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CookieService} from 'ngx-cookie-service';

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

  constructor(private sharedService: SharedService, private cookieService: CookieService) { }
  ngOnInit(): void {
    this.loadMacs()
  }

  loadMacs() {
    if(this.foods && this.userID){
      this.sharedService.getDiaryByDate(this.userID, this.date).subscribe(data => {
        this.foods = data;
      })
      this.loaded = true;
    }
  }



}
