import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users : User[] = []
  loaded : boolean = false

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.sharedService.getUsers().subscribe(user =>{
      this.users = user
      this.loaded = true;
      })
    console.log((this.users))
  }

  get userId():number {
    return this.sharedService.userId
  }

  userID(val:number) {
    this.sharedService.userId = val;
  }
}
