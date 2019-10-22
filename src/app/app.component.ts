import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Toaster1Component } from "./toaster1.component";

// const jwt = require("jsonwebtoken");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements AfterViewInit{
  title = 'angular8project';
  
  @ViewChild('toaster1', {static: false}) toaster1: Toaster1Component;

  ngAfterViewInit(){
    this.toaster1.popToast('success','App','Hello im popup from ngAfterViewInit');
  }

  showToaster(){
    this.toaster1.popToast('success','App','triggered from App Component');
  }

}
