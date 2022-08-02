import { Component, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    Component,
    FormControl,
    Observable,
    HomeComponent,
    AppComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
