import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiaryComponent } from '../diary/diary.component';
import {SearchfoodsService} from '../services/searchfoods.service';
@Component({
  selector: 'app-foodinput',
  templateUrl: './foodinput.component.html',
  styleUrls: ['./foodinput.component.css']
})
export class FoodinputComponent implements OnInit {
  InputFood:string = "";
  data:any;
  constructor(private SearchfoodsService: SearchfoodsService) { }

  ngOnInit(): void {
  }


  onClick():void{
    console.log(this.InputFood)
    this.SearchfoodsService.getFood(this.InputFood).subscribe(response => {
      this.data = response;
      console.log(response);
    });
    console.log(this.data);
  }

}
