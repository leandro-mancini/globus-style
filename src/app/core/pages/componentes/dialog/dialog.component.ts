import { Component, OnInit } from '@angular/core';

import { DialogNotificationService } from 'ngx-globus-style';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  code = `
    <pre>
      <code>
import { DialogNotificationService } from 'ngx-globus-style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public dialog: DialogNotificationService
  ) { }
  
  alertOpen() {
    this.dialog.alert('Atenção', ['Teste de Mensagem 1']);
  }
  
  confirmOpen() {
    this.dialog.confirm('Atenção', 'Teste de mensagem').subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
      </code>
    </pre>`;

  constructor(
    public dialog: DialogNotificationService
  ) { }

  ngOnInit() {
  }

  alertOpen() {
    this.dialog.alert('Atenção', ['Teste de Mensagem 1']);
  }
 
  confirmOpen() {
    this.dialog.confirm('Atenção', 'Teste de mensagem').subscribe((resp: any) => {
      console.log(resp);
    });
  }

}
