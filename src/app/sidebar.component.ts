import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { ReferentialService } from './referential.service';
import { country } from './interface/country'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    //  providers: [ReferentialService]
})
export class SidebarComponent implements OnInit {

    whatever = 'Select a country';
    private countryList: country[] = [];
    @Output() countryChanged= new EventEmitter<country>();

    public constructor(rs: ReferentialService) {
        this.countryList = rs.getCountryList();
        console.log(this.countryList)
    } 
    ngOnInit() {
        //  alert('test')
        var countrie
    }

    selectedCountryChanged2 (selectedCountry:country) { 
       alert( selectedCountry.name );
       this.countryChanged.emit(selectedCountry);
    }

}
