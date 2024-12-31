import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private countryName: string = '';

  setCountryName(name: string) {
    this.countryName = name;
  }

  getCountryName(): string {
    return this.countryName;
  }

  constructor() { }


}
