import { Component, OnInit } from '@angular/core';
import { NavbarScreensService } from '../navbar-screens.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarScreens: String[] = [];

  constructor(private navbarScreensService: NavbarScreensService) { 

  }

  ngOnInit(): void {
    this.getScreens();
  }

  getScreens(): void{
    this.navbarScreens = this.navbarScreensService.getScreens()
  }

}
