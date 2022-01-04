import { Component, OnInit } from '@angular/core';
import {User} from "../user/user";
import {SharedService} from "../services/shared.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: User = new User()


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getUser(this.userId).subscribe(user => {
      this.userData = user;
      console.log(this.userData)
    })
  }

  updateUser(){
  this.sharedService.updateUser(this.userData).subscribe(
      response => Swal.fire("Good job!", "You updated your profile!", "success"),
      error => Swal.fire('Oops..','Your did not update your profile!', 'error')
    )}

  deleteUser(){
    this.sharedService.deleteUser(this.userId).subscribe(
      response => Swal.fire("Good job!", "You updated your profile!", "success"),
      error => Swal.fire('Oops..','Your did not update your profile!', 'error')
    )}

  get userId(){
    return this.sharedService.userId
  }
}
