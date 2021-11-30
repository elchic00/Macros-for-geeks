import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //delete this when actual api is added
import { InMemoryDataService } from './in-memory-data.service';
import { WavesModule, InputsModule, ButtonsModule, MDBBootstrapModule  } from 'angular-bootstrap-md'
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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MacrosComponent,
    DiaryComponent,
    ProgressComponent,
    DonutChartComponent,
    FoodinputComponent
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

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [SearchfoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
