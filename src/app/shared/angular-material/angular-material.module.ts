import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [],
  exports:[
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class AngularMaterialModule { }
