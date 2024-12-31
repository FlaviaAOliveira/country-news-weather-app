import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor() { }


  async get(options: HttpOptions) {
    console.log("Making HTTP request to:", options.url);
    return await CapacitorHttp.get(options);
  }
}
