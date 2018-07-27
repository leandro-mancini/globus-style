import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogNotificationComponent } from './dialog-notification.component';
import { DialogNotificationConfig } from './dialog-notification';

@Injectable({
  providedIn: 'root'
})
export class DialogNotificationService {
  dialogRef: MatDialogRef<DialogNotificationComponent>;

  dialogNotificationConfig: DialogNotificationConfig;

  constructor(
    private dialog: MatDialog
  ) {
  }

  alert(title: string, message: Array<string>, config?: any): Observable<void>{
    const msg = message.join('<br/>');

    this.dialogNotificationConfig = new DialogNotificationConfig().deserialize(config);

    this.dialogRef = this.dialog.open(DialogNotificationComponent, {
        width: this.dialogNotificationConfig.width
    });

    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = msg;
    this.dialogRef.componentInstance.actions = false;

    return null;

    // return this.dialogRef.afterClosed();
  }

  confirm(title: string, message: string, config?: any): Observable<boolean>{

    this.dialogNotificationConfig = new DialogNotificationConfig().deserialize(config);

    this.dialogRef = this.dialog.open(DialogNotificationComponent, {
        width: this.dialogNotificationConfig.width,
        disableClose: true
    });

    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;
    this.dialogRef.componentInstance.actions = true;

    return null;

    // return this.dialogRef.afterClosed();
  }

  close(result: boolean) {
    this.dialogRef.close(result);
  }
}
