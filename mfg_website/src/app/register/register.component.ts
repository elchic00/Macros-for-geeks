import { Component, OnInit } from '@angular/core';
import {User} from "../user/user";
import { SharedService } from '../services/shared.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  name: string = ""
  heightFiller : string = "5\'5"
  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  postUser() {
    this.sharedService.addUser(this.user).subscribe(
      response => Swal.fire("Good job!", "You registered a new user!", "success"),
      error => Swal.fire('Oops...','Your did not register a new user!', 'error')
    )
    this.userID(this.user.id)
  }

  userID(val:number) {
    this.sharedService.userId = val;
  }


}
