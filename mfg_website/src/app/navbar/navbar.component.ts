import { Component, OnInit } from '@angular/core';
import { navbarpathnames } from 'src/pathnames';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarScreens = navbarpathnames;

  constructor() { 

  }

  ngOnInit(): void {
    
  }


}
