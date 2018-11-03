import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
//import {AppModule} from './app.module'
import { country } from './interface/country'

@Injectable(
  //  {
  //providedIn: AppModule // normaal gesproken providedIn: 'root'. Zo limit je  use to AppModule !
  //}
)
export class ReferentialService {
  //countries: [];
  countryList: country[] = [];
  getCountryList(): country[] {
    this.countryList = [
      { id:10, name: 'FR', desc: 'France' },
      { id: 11, name: 'CH-FR', desc: 'Suisse Fr' },
      { id:12, name: 'BE-FR', desc: 'Belgique Fr' },
      { id: 13, name: 'BE-NL', desc: 'France' },
      { id: 14, name: 'ES', desc: 'France' },
      { id: 15, name: 'PT', desc: 'Portugal' }];
    return this.countryList;
  }

}

class Subject {
  guid: string;
  name: string;
}