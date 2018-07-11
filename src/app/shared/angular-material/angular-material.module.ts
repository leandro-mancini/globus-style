import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: [],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
