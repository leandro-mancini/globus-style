import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private translate: TranslateService
  ) {
    this.initTranslate();
  }

  initTranslate() {
    // Defina o idioma padrão para cadeias de tradução e o idioma atual.
    this.translate.setDefaultLang('pt');

    if (this.translate.getBrowserLang() !== undefined) {
        this.translate.use(this.translate.getBrowserLang());
    } else {
        this.translate.use('pt'); // Defina seu idioma aqui
    }
  }
}
