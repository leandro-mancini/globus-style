# Globus Style

[![npm version](https://badge.fury.io/js/ngx-globus-style.svg)](https://www.npmjs.com/package/ngx-globus-style)
[![npm](https://img.shields.io/npm/dt/ngx-globus-style.svg?caching=true)](https://www.npmjs.com/package/ngx-globus-style)

**ngx-globus-style** Um framework front-end de comportamento e estilo para projetos web, com uma interface usada por milhares de usuários. Mantido pelos desenvolvedores front-end da BgmRodotec. [Globus Style](https://github.com/leandro-mancini/globus-style).

## Dependências

* [Angular](https://angular.io) `npm install -g @angular/cli`
* [Angular Material](https://material.angular.io) `npm install --save @angular/material @angular/cdk`. Se estiver usando a versão do [Angular 6](https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4) execute isto `ng add @angular/material`

## Demo
[Documentation, demos](http://opensource.globus7.com.br)

# Começando

Consulte o nosso [Guia de Introdução](http://opensource.globus7.com.br).

## Instalação:

Depois de instalar as dependências acima, instale o `ngx-globus-style` via [npm](https://www.npmjs.com/):

```bash
npm install --save ngx-globus-style
```

#### 1. Importe o `GlobusStyleModule`:

Finalmente, você pode usar o ngx-globus-style no seu projeto Angular. Uma vez instalado, você precisa importar nosso módulo principal `GlobusStyleModule` no seu root NgModule do seu aplicativo:

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

Basta seguir as instruções de introdução para o uso.

* [Toast](#toast)
* [Dialog](#dialog)

#### Toast:

Inicie o `ToastNotificationService` para seu aplicativo:

```js
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
```

```html
<button (click)="showToast()">Exibir Toast!</button>
```

#### Dialog:

Inicie o `DialogNotificationService` para seu aplicativo:

```js
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
    this.dialog.alert('Atenção', ['Teste de Mensagem 1');
  }

  confirmOpen() {
    this.dialog.confirm('Atenção', 'Teste de mensagem').subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
```

```html
<button (click)="alertOpen()">Exibir Alerta!</button>
<button (click)="confirmOpen()">Exibir Confirmação!</button>
```

## Contribuindo

Sou muito grato pelas suas ideias, propostas e descobri bugs que você pode deixar em questões do github. Desde já, obrigado!
