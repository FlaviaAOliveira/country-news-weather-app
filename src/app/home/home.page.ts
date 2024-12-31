import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, RouterLink, FormsModule],
})
export class HomePage {
  countryName: string = '';
  countries: any[] = [];


  constructor(private router: Router, private mhs: MyHttpService, private mds: MyDataService) {
    addIcons({ settingsOutline });
  }

  async search() {
    this.mds.setCountryName(this.countryName);
    this.router.navigate(['/countries']);
  }
}
