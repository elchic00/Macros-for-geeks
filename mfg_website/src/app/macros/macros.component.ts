import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CookieService} from 'ngx-cookie-service';
import Swal from "sweetalert2";

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
  entry: any = 0

  constructor(private sharedService: SharedService, private cookieService: CookieService) { }
  ngOnInit(): void {
    this.loadMacs()

  }

  loadMacs() {
    if(this.foods && this.userID){
      this.sharedService.getDiaryByDate(this.userID, this.date).subscribe(data => {
        this.foods = data;
      })
      console.log(this.foods)
      this.loaded = true;
    }
  }

  deleteEntry(entry: number){
    console.log(this.entry)
    Swal.fire({
      title: 'Do you want to delete this entry?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.sharedService.deleteDiary(entry).subscribe(
          res =>
            Swal.fire('Deleted!', '', 'success'),
          error => Swal.fire('Changes were not made', '', 'error')
        )
        this.ngOnInit();
      } else if (result.isDenied) {
        Swal.fire('Changes were not made', '', 'info')
      }
    })
  }


}
