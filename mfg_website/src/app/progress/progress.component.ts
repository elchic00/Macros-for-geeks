import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    // this.http.post<any>('', {}).subscribe(data => {
    // })
  }

}
