import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { GlobusStyleModule } from 'ngx-globus-style';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GlobusStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
