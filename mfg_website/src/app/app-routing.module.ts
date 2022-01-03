import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
import { MacrosComponent } from './macros/macros.component';
import { DiaryComponent } from './diary/diary.component'
import { navbarpathnames, rootpathnames } from 'src/pathnames';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RegisterComponent} from "./register/register.component";
import {root} from "rxjs/internal-compatibility";


const routes: Routes = [
  {path: "", redirectTo: `/${rootpathnames.Login}`, pathMatch: 'full'},
  {path: rootpathnames.Login, component: LoginComponent,
  children:[
    {path:navbarpathnames.Register, component:RegisterComponent}
  ]},
  {
    path: rootpathnames.Home,
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: navbarpathnames.Macros, pathMatch: 'full'},
      { path: navbarpathnames.Diary , component: DiaryComponent, },
      { path: navbarpathnames.Progress, component: ProgressComponent },
      { path: navbarpathnames.Macros , component: MacrosComponent},
      {path:navbarpathnames.Register, component:RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
