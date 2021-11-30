import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { MacrosComponent } from './macros/macros.component';
import { DiaryComponent } from './diary/diary.component'
import { pathnames } from 'src/pathnames';
import { FoodComponent } from './food/food.component';


const routes: Routes = [
  { path: pathnames.Diary , component: DiaryComponent },
  { path: pathnames.Progress, component: ProgressComponent },
  { path: pathnames.Macros , component: MacrosComponent },
  {path: "Food", component: FoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }