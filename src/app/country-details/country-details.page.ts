import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonCardHeader, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountryDetailsPage implements OnInit {
  country: any = null;
  currencies: string[] = [];
  capital: string = '';
  region: string = '';
  timezones: string[] = [];

  constructor(private mds: MyDataService) { }

  ngOnInit() {
    this.country = this.mds.getCountryDetails();
    this.capital = this.country.capital?.[0];
      this.region = this.country.region;
      this.timezones = this.country.timezones;
  }

}
