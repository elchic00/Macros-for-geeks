import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { MacrosComponent } from './macros/macros.component';
import { DiaryComponent } from './diary/diary.component';

const routes: Routes = [
  { path: 'diary', component: DiaryComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'macros', component: MacrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }