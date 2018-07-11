import { Component, OnInit } from '@angular/core';
import { ToastNotificationService } from 'ngx-globus-style';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  code = `
    <pre>
      <code>
import { ToastNotificationService } from 'ngx-globus-style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public toast: ToastNotificationService
  ) { }
  
  showToast() {
    this.toast.open('Mensagem de teste.');
  }
}
      </code>
    </pre>`;

  constructor(
    public toast: ToastNotificationService
  ) { }

  ngOnInit() {
  }

  showToast() {
    this.toast.open('Mensagem de teste.');
  }

}
