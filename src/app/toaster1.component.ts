import { Component, Input } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';

//[toasterconfig]="config"
@Component({
  selector: 'toaster1',
  template: `
    <toaster-container [toasterconfig]="config"></toaster-container>
    <button (click)="popToast()">Success Toast</button>
  `,
  
})
export class Toaster1Component {
  private toasterService: ToasterService;

  constructor(toasterService: ToasterService) {
      this.toasterService = toasterService;
  }

  config: ToasterConfig = 
    new ToasterConfig({
        showCloseButton: { 'warning': true, 'error': true, 'success': true },
        animation: 'fade',
        limit: 1,
        positionClass: 'toast-center'
    });

  popToast(type = 'success', title = 'Toaster 1', content = 'triggered from toaster1.component.ts') {
    this.toasterService.pop(type, title, content);
  }
}