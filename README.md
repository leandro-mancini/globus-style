# Globus Style

[![npm version](https://badge.fury.io/js/ngx-globus-style.svg)](https://www.npmjs.com/package/ngx-globus-style)
[![npm](https://img.shields.io/npm/dt/ngx-globus-style.svg?caching=true)](https://www.npmjs.com/package/ngx-globus-style)

**globus-style** Um framework front-end de comportamento e estilo para projetos web, com uma interface usada por milhares de usuários. Mantido pelos desenvolvedores front-end da BgmRodotec. [Globus Style](https://github.com/leandro-mancini/globus-style).

#### Demo
[Documentation, demos](http://opensource.globus7.com.br)

# Começando

Consulte o nosso [Guia de Introdução](http://opensource.globus7.com.br).

## Instalação:

install `ngx-globus-style` via:

```bash
npm install --save ngx-globus-style
```

Uma vez instalado, você precisa importar nosso módulo principal no seu módulo de aplicativo:

```js
import { GlobusStyleModule } from 'ngx-globus-style';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [GlobusStyleModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Components

#### Toast Notification:

Basta seguir as instruções de introdução para o uso.

```js
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

  toastOpen() {
    this.toast.open('Mensagem de teste.');
  }
}
```
## Contribuindo

Sou muito grato pelas suas ideias, propostas e descobri bugs que você pode deixar em questões do github. Desde já, obrigado!
