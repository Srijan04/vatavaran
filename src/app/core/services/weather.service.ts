import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'd4594364698122bfd1c4b3eb5f2ff19f';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const params = new HttpParams().set('q', city).set('appid', this.apiKey);
    return this.http.get("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + this.apiKey);
  }

  getForecast(lat: string, long: string): Observable<any> {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather" + "?lat=" + lat +"&lon="+ long +"&appid=" + this.apiKey + "&units=metric");
  }

  getDetailForecast(lat: string, long: string){
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon="+ long +"&appid=" + this.apiKey + "&cnt=5&units=metric");

  }

}
