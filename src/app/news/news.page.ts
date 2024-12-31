import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { Router } from '@angular/router';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {
  countryName: string = '';
  countryCode: string = '';
  newsStories: any[] = [];
  newsResultMessage: string = '';
  private apiKey: string = 'pub_634822d1705b050f72ee94c648a1480a2f44a';

  constructor(private mds: MyDataService, private mhs: MyHttpService, private router: Router) { }

  ngOnInit() {
    this.countryName = this.mds.getCountryName();
    this.countryCode = this.mds.getCountryCode();
    this.getNewsData();
  }

  async getNewsData() {
    var options:HttpOptions = {
      url: `https://newsdata.io/api/1/latest?apikey=${this.apiKey}&country=${this.countryCode}`,
    };

    let result = await this.mhs.get(options);
    console.log("API response:", result);
    
    if (result.data && result.data.results && result.data.results.length > 0) {
      this.newsStories = result.data.results;
      this.newsResultMessage = '';
    } else {
      this.newsStories = [];
      this.newsResultMessage = `No News found for ${this.countryName}`;
    }
  }

}
