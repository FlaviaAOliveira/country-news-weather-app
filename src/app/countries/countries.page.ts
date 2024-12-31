import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCardContent, IonCardTitle, IonCard, IonCardHeader]
})
export class CountriesPage implements OnInit {
  countries: any[] = [];
  countryName: string = '';
  invalidInputMessage: string = '';

  constructor(private mds: MyDataService, private mhs: MyHttpService, private router: Router) { }

  ngOnInit() {
    this.countryName = this.mds.getCountryName();
    this.searchCountries();
  }

  async searchCountries() {
    var name = this.mds.getCountryName();

    var   options:HttpOptions = {
      url: `https://restcountries.com/v3.1/name/${name}`,
    }

    let result = await this.mhs.get(options);
    this.countries = result.data;
  }

}
