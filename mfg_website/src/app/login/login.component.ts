import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FoodinputComponent } from '../foodinput/foodinput.component';
import { SharedService } from '../services/shared.service';
import { User } from '../user/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users : User[] = []
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.sharedService.getUsers().subscribe(user => this.users = user)
  }
  
}