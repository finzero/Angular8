import { Component } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';

const jwt = require("jsonwebtoken");

@Component({
  selector: 'toaster2',
  template: `
    <toaster-container ></toaster-container>
    <button (click)="popToast()">Error Toast</button>
  `,
  
  
})
export class Toaster2Component {
  title = 'angular8project';
  private toasterService: ToasterService;
 
  constructor(toasterService: ToasterService) {
      this.toasterService = toasterService;
  }

  public config: ToasterConfig = 
    new ToasterConfig({
        showCloseButton: { 'warning': true, 'error': true, 'success': true },
        animation: 'fade'
    });

  popToast() {
      this.toasterService.pop('error', 'Toaster 2', 'triggered from toaster2.component.ts');
  }
}
