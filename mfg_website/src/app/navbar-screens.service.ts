import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarScreensService {

  constructor() { }

  getScreens(): String[]{
    return ["Diary", "Macros", "Progress"]; // make non-mutable
  }
}
