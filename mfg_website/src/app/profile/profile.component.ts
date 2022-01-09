import { Component, OnInit } from '@angular/core';
import {User} from "../user/user";
import {SharedService} from "../services/shared.service";
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: User = new User()


  constructor(private router: Router, private sharedService: SharedService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.sharedService.getUser(this.userId).subscribe(user => {
      this.userData = user;
    })
  }

  updateUser(){
  this.sharedService.updateUser(this.userData).subscribe(
      response => Swal.fire("Good job!", "You updated your profile!", "success"),
      error => Swal.fire('No Bueno','Your did not update your profile!', 'error')
    )}

  deleteUser() {
    Swal.fire({
      title: 'Do you want to delete this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.sharedService.deleteUser(this.userId).subscribe(
          res => {
            Swal.fire('Deleted!', '', 'success')
            this.router.navigateByUrl('/Login')
          },
        error => Swal.fire('Changes were not made', '', 'error')
        )
      } else if (result.isDenied) {
        Swal.fire('Changes were not made', '', 'info')
      }
    })

  }

  get userId(){
    return Number(this.cookieService.get('id'))
  }


}

