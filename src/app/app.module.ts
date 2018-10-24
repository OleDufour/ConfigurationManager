import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReferentialService} from './referential.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 providers: [ReferentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
