import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleColumnChartComponent } from './google-column-chart/google-column-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
