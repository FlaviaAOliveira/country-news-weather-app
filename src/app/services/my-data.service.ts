import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private countryName: string = '';
  private countryCode: string = '';
  private countryDetails: any = null;
  private countryBorders: string[] = [];

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

  setCountryDetails(details: any) {
    this.countryDetails = details;
  }

  getCountryDetails(): any {
    return this.countryDetails;
  }

  setCountryBorders(borders: string[]) {
    this.countryBorders = borders;
  }

  getCountryBorders(): string[] {
    return this.countryBorders;
  }


  constructor() { }

}
