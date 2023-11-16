import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { CounterService } from './core/services/counter.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WeatherComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [CounterService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
