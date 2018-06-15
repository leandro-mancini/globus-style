import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogNotificationComponent } from './dialog-notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogNotificationComponent],
  exports: [DialogNotificationComponent]
})
export class DialogNotificationModule { }
