import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

import { DialogNotificationService } from './dialog-notification.service';

@Component({
  selector: 'gs-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.css'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: { }
    }
  ]
})
export class DialogNotificationComponent implements OnInit {
  public title: string;
  public message: string;
  public actions: boolean;

  constructor(
    public teste: DialogNotificationService,
    public dialogRef: MatDialogRef<DialogNotificationComponent>,
    public dialog: MatDialog,
    @Inject(DOCUMENT) doc: any
  ) { }

  ngOnInit() {
  }

  close(result: boolean) {
    this.teste.close(result);
  }

}
