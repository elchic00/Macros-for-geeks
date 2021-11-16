import { Component, OnInit } from '@angular/core';
import { screens } from 'src/screens';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarScreens = screens

  constructor() { 

  }

  ngOnInit(): void {
    
  }


}
