import { Component } from '@angular/core';
import { ToastNotificationService, DialogNotificationService } from 'ngx-globus-style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private toast: ToastNotificationService,
    private dialog: DialogNotificationService
  ) { }

  title = 'app';

  toastOpen() {
    this.toast.open('Mensagem de teste.');
  }

  alertOpen() {
    this.dialog.alert('Atenção', ['Teste de Mensagem 1', 'Teste de Mensagem 2'], {
      width: '580px'
    });
  }

  confirmOpen() {
    this.dialog.confirm('Atenção', 'Teste de mensagem').subscribe((resp) => {
      console.log(resp);
    });
  }
}
