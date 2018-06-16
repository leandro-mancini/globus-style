import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogNotificationComponent } from './dialog-notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DialogNotificationComponent],
  exports: [
    DialogNotificationComponent
  ],
  entryComponents: [DialogNotificationComponent]
})
export class DialogNotificationModule { }
