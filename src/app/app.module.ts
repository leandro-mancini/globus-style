import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
