import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../core/services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName = '';
  recentLocations: any[] = [];
  selectedLocation: any;
  selectedLocationList: any;
  futureForcastData: any;

  constructor(private weatherService: WeatherService,
    private datePipe: DatePipe) {}

  ngOnInit() {}

  addLocation() {
    this.weatherService.getWeather(this.cityName).subscribe(
      (data: any) => {
        console.log(data)
        if(data?.length > 0){
          this.getForcast(data[0].name, data[0].lat, data[0].lon)
        }
        else{
          alert('Invalid city name')
        }
      },
      (error: any) => {
        console.error('Invalid city name', error);
      }
    );
  }

  getForcast(name:string,lat: string, lon:string){
    this.weatherService.getForecast(lat, lon).subscribe(
      (data: any) => {
        if(data){
        this.recentLocations.unshift({
          name: name,
          weather : data.weather[0].main,
          temperature : data.main.temp,
          weatherIcon: data.weather[0].icon,
          lat : lat,
          lon : lon
        });
        this.cityName = '';
        console.log(this.recentLocations)
        if(this.recentLocations.length > 8){
          this.recentLocations.pop();
        }
      }
      else{
        alert('Something Went Wrong!')
      }
      },
      (error: any) => {
        console.error('Invalid city name', error);
      }
    ); 
  }
  refreshWeather(location: any) {
    this.weatherService.getForecast(location.lat, location.lon).subscribe(
      (data) => {
        location.temperature = data.main.temp;
      },
      (error) => {
        console.error('Error refreshing weather', error);
      }
    );
  }

  removeLocation(index: number) {
    this.recentLocations.splice(index, 1);
  }

  clearLocations() {
    this.recentLocations = [];
  }

  onLocationClick(location: any) {
    this.weatherService.getDetailForecast(location.lat, location.lon).subscribe(
      (data: any) => {
        this.selectedLocation = data;
        this.selectedLocationList = data.list[0];
        this.futureForcastData = data.list;
      },
      (error) => {
        console.error('Error refreshing weather', error);
      }
    );
  }

  formatDate(dt_txt: string): string {
    const date = new Date(dt_txt);
    return this.datePipe.transform(date, 'dd MMM')!;
  }

  // formatDay(dt_txt: string): string {
  //   const date = new Date(dt_txt);
  //   return this.datePipe.transform(date, 'EEEE')!; 
  // }
  
}
