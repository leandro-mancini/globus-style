import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comecando',
  templateUrl: './comecando.component.html',
  styleUrls: ['./comecando.component.css']
})
export class ComecandoComponent implements OnInit {
  code = `
    <pre>
      <code>
import { GlobusStyleModule } from 'ngx-globus-style';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [GlobusStyleModule, ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
      </code>
    </pre>`;

  constructor() { }

  ngOnInit() {
  }

}
