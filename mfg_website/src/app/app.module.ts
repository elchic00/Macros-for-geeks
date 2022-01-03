import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WavesModule, InputsModule, ButtonsModule, MDBBootstrapModule  } from 'angular-bootstrap-md'
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MacrosComponent } from './macros/macros.component';
import { DiaryComponent } from './diary/diary.component';
import { ProgressComponent } from './progress/progress.component';
import { HttpClientModule } from '@angular/common/http';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import {SearchfoodsService} from './services/searchfoods.service';
import { FoodinputComponent } from './foodinput/foodinput.component'
import {FormsModule} from '@angular/forms';
import { SharedService } from './services/shared.service';
import { GetUserComponent } from './user/get-user/get-user.component';
import { LoginComponent } from './login/login.component';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import {ChartsModule} from 'ng2-charts';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MacrosComponent,
    DiaryComponent,
    ProgressComponent,
    GetUserComponent,
    DonutChartComponent,
    FoodinputComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
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
    SweetAlert2Module.forRoot(),
    ChartsModule
  ],
  providers: [SharedService,SearchfoodsService, DatePipe],
  //providers: [SearchfoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
