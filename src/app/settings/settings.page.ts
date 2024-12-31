import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  selectedUnit: string = 'metric';
  
  constructor() { }

  ngOnInit() {
    const defaultUnit = localStorage.getItem('units');
    if (defaultUnit) {
      this.selectedUnit = defaultUnit;
    } else {
      this.selectedUnit = 'metric';
    }
}

  unitChange() {
    localStorage.setItem('units', this.selectedUnit);
  }
}
