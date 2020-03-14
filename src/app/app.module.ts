import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { PieChartComponentComponent } from './pie-chart-component/pie-chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponentComponent
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
