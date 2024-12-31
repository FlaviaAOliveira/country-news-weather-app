import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {
  capital: string = '';
  weatherIcon: string = '';
  description: string = '';
  temperature: number = 0;
  units: string = "metric";
  countryName: string = '';

  private apiKey: string = '301db0e7e8fe78c331983d665bb2ea83';

  constructor(private mhs: MyHttpService, private mds: MyDataService) { }

  ngOnInit() {
    this.countryName = this.mds.getCountryName();
    this.getWeatherData();
  }

  async getWeatherData() {
    const countryDetails = this.mds.getCountryDetails();
    
    this.capital = countryDetails.capital;
    const [lat, long] = countryDetails.latlng;
    this.units = localStorage.getItem('units') || 'metric';

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${this.units}&appid=${this.apiKey}`;
    const result = await this.mhs.get({url: weatherUrl});
    const weather = result.data;

    this.weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    this.description = weather.weather[0].description;
    this.temperature = weather.main.temp;
  }

}
