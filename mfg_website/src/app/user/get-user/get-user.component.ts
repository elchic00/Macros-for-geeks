import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  userList:any = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList() {
    this.sharedService.getUsers().subscribe(users => {
      this.userList = users;
      console.log(this.userList);
    })
  }

}
