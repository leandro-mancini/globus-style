import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { ToastNotificationComponent } from './toast-notification.component';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {
  snackBarRef: MatSnackBarRef<ToastNotificationComponent>;

  constructor(
    public snackBar: MatSnackBar
  ) { }

  open(message: string) {
    this.snackBarRef = this.snackBar.openFromComponent(ToastNotificationComponent, {
      duration: 3000,
    });
    
    this.snackBarRef.instance.message = message;
    this.snackBarRef.instance.snackBarRef = this.snackBarRef;
  }

  close() {
    this.snackBarRef.dismiss();
  }
}
