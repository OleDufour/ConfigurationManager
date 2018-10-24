import { Component, OnInit } from '@angular/core';

import { ReferentialService } from './referential.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [ReferentialService]
})
export class SidebarComponent implements OnInit {
    countries;
    whatever = 'Sidebar';
    
 
    public constructor( rs:ReferentialService) {
        //this.myService.myMethod(this.data);
        this.countries=rs.getCities();
    }


    ngOnInit() {
      //  alert('test')
        var countries

    }

}
