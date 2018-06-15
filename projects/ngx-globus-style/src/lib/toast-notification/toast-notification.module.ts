import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastNotificationComponent } from './toast-notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  declarations: [ToastNotificationComponent],
  exports: [
    ToastNotificationComponent
  ]
})
export class ToastNotificationModule { }
