import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavbarScreensService {

  constructor() { }

  getScreens(): String[]{
    return ["diary", "macros", "progress"]; // make non-mutable
  }
}