import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {ReferentialService} from './referential.service';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
 providers: [ReferentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
