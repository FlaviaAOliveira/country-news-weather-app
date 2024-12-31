import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { MyDataService } from '../services/my-data.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-neighbours',
  templateUrl: './neighbours.page.html',
  styleUrls: ['./neighbours.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NeighboursPage implements OnInit {
  neighbors: any[] = [];

  constructor(private mhs: MyHttpService, private mds: MyDataService) { }

  ngOnInit() {
    const borders = this.mds.getCountryBorders();
    this.getNeighbours(borders);
  }

  async getNeighbours(borders: string[]) {
        for (let border of borders) {
          var options = { url: `https://restcountries.com/v3.1/alpha/${border}` };
          let result = await this.mhs.get(options);
         
          if (result.data && result.data[0]) {
            this.neighbors.push({
              flag: result.data[0].flags?.png,
              code: result.data[0].cioc,
            });
          }
          

        }

}
}
