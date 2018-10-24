import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
//import {AppModule} from './app.module'

@Injectable(
 //  {
  //providedIn: AppModule // normaal gesproken providedIn: 'root'. Zo limit je  use to AppModule !
 //}
)
export class ReferentialService {
  countries: string[];
  getCities(): string[] {
   this.countries = ['FR', 'CH-FR', 'BE-FR', 'BE-NL', 'ES', 'PT'];
    return  this.countries;
  }

}

class Subject {
  guid: string;
  name: string;
}