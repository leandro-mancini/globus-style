# Globus Style

[![npm version](https://badge.fury.io/js/ngx-globus-style.svg)](https://www.npmjs.com/package/ngx-globus-style)
[![npm](https://img.shields.io/npm/dt/ngx-globus-style.svg?caching=true)](https://www.npmjs.com/package/ngx-globus-style)

**globus-style** Um framework front-end de comportamento e estilo para projetos web, com uma interface usada por milhares de usuários. Mantido pelos desenvolvedores front-end da BgmRodotec. [Globus Style](https://github.com/leandro-mancini/globus-style).

#### Demo
[Documentation, demos](http://opensource.globus7.com.br)

# Começando

Consulte o nosso [Guia de Introdução](http://opensource.globus7.com.br).

## Instalação:

```bash
npm install --save globus-style
```

## Components

### Toast Notification

#### Import via Webpack
Basta seguir as instruções de introdução para importar a biblioteca.

## Começando com a configuração padrão - NgModule (recomendado):

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgxGlobusStyleModule } from 'ngx-globus-style';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGlobusStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```
