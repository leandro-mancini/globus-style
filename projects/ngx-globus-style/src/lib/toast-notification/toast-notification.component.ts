import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'gs-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css'],
  providers: [
    {
      provide: MatSnackBarRef,
      useValue: { }
    }
  ]
})
export class ToastNotificationComponent {
  public title: string;
  public message: string;

  constructor(
    public snackBarRef: MatSnackBarRef<ToastNotificationComponent>,
    public snackBar: MatSnackBar
  ) { }

}
