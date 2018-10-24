import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar.component'
 


@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngConfigurationManager';
  public data = {};

  isDisabled=true;
  onClickMe($event) {
    console.log($event);
  }

  public constructor( ) {
      // this.myService.myMethod$.subscribe((data) => {
      //         this.data = data; // And he have data here too!
      //     }
      // );
  }
}
