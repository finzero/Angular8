import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { Toaster1Component } from "./toaster1.component";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Toaster1Component
  ],
  imports: [
    BrowserModule,
    ToasterModule,
    BrowserAnimationsModule, 
    ToasterModule.forRoot()
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
