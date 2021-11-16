import { Component, OnInit } from '@angular/core';
import { pathnames } from 'src/pathnames';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarScreens = pathnames;

  constructor() { 

  }

  ngOnInit(): void {
    
  }


}
