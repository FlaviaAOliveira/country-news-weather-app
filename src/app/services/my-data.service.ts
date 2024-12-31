import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private countryName: string = '';
  private countryCode: string = '';

  setCountryName(name: string) {
    this.countryName = name;
  }

  getCountryName(): string {
    return this.countryName;
  }


  setCountryCode(code: string) {
    this.countryCode = code;
  }

  getCountryCode(): string {
    return this.countryCode;
  }
  constructor() { }


}
