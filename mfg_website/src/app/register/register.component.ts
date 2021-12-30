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

  constructor(private SharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  postUser() {
    this.SharedService.addUser(this.user).subscribe(
      response => Swal.fire("Good job!", "You posted your food info!", "success"),
      error => Swal.fire('Oops...','Your food did not post!', 'error')
    )
  }

}
