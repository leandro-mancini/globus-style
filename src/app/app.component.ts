import { Component } from '@angular/core';
import { ToastNotificationService } from 'ngx-globus-style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private toast: ToastNotificationService
  ) { }

  title = 'app';

  toastOpen() {
    this.toast.open('Mensagem de teste.');
  }
}
