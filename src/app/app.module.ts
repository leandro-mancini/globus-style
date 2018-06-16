import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobusStyleModule } from 'ngx-globus-style';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { DialogComponent } from './core/pages/componentes/dialog/dialog.component';
import { ToastComponent } from './core/pages/componentes/toast/toast.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    GlobusStyleModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
