import { NgModule } from '@angular/core';
import { NgxGlobusStyleComponent } from './ngx-globus-style.component';
import { ToastNotificationModule } from './toast-notification/toast-notification.module';
import { DialogNotificationModule } from './dialog-notification/dialog-notification.module';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    ToastNotificationModule,
    DialogNotificationModule,
    MatIconModule
  ],
  declarations: [NgxGlobusStyleComponent],
  exports: [
    NgxGlobusStyleComponent,
    DialogNotificationModule,
    ToastNotificationModule
  ]
})
export class GlobusStyleModule { 
  constructor(matIconRegister: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegister.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('icons/icons.svg'));
  }
}
