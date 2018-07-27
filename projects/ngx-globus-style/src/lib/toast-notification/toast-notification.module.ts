import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastNotificationComponent } from './toast-notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ToastNotificationComponent],
  exports: [
    ToastNotificationComponent
  ],
  entryComponents: [ToastNotificationComponent]
})
export class ToastNotificationModule { }
