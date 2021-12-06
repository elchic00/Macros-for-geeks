import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //delete this when actual api is added
import { WavesModule, InputsModule, ButtonsModule, MDBBootstrapModule  } from 'angular-bootstrap-md'
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MacrosComponent } from './macros/macros.component';
import { DiaryComponent } from './diary/diary.component';
import { ProgressComponent } from './progress/progress.component';
import { HttpClientModule } from '@angular/common/http';
import { WavesModule,InputsModule,ButtonsModule,MDBBootstrapModule } from 'angular-bootstrap-md';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import {SearchfoodsService} from './services/searchfoods.service';
import { FoodinputComponent } from './foodinput/foodinput.component'
import {FormsModule} from '@angular/forms';
import { GetFoodComponent } from './food/get-food/get-food.component';
import { AddFoodComponent } from './food/add-food/add-food.component';
import { FoodComponent } from './food/food.component';
import { SharedService } from './services/shared.service';
import { GetUserComponent } from './user/get-user/get-user.component';
import { LoginComponent } from './login/login.component';

import {SearchfoodsService} from './services/searchfoods.service';
import {FoodinputComponent } from './foodinput/foodinput.component'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MacrosComponent,
    DiaryComponent,
    ProgressComponent,
    GetFoodComponent,
    AddFoodComponent,
    FoodComponent,
    GetUserComponent,
    DonutChartComponent,
    FoodinputComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    MDBBootstrapModule,
    FormsModule,
  ],
  providers: [SharedService,SearchfoodsService, DatePipe],
  //providers: [SearchfoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
