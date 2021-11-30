import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/food/food';
import { SharedService } from 'src/app/services/shared.service';
import { User } from 'src/app//user/user';

@Component({
  selector: 'app-get-food',
  templateUrl: './get-food.component.html',
  styleUrls: ['./get-food.component.css']
})
export class GetFoodComponent implements OnInit {
 
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  refreshFoodList() {
    this.sharedService.getUsers().subscribe(users => {
     
    })
  }

}
