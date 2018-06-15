import { NgModule } from '@angular/core';
import { NgxGlobusStyleComponent } from './ngx-globus-style.component';
import { ToastNotificationModule } from './toast-notification/toast-notification.module';
import { DialogNotificationModule } from './dialog-notification/dialog-notification.module';

@NgModule({
  imports: [
    ToastNotificationModule,
    DialogNotificationModule
  ],
  declarations: [NgxGlobusStyleComponent],
  exports: [
    NgxGlobusStyleComponent,
    DialogNotificationModule,
    ToastNotificationModule
  ]
})
export class GlobusStyleModule { }
