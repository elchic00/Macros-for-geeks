import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { MacrosComponent } from './macros/macros.component';
import { DiaryComponent } from './diary/diary.component'
import { screens } from 'src/screens';


const routes: Routes = [
  { path: screens.Diary , component: DiaryComponent },
  { path: screens.Progress, component: ProgressComponent },
  { path: screens.Macros , component: MacrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }