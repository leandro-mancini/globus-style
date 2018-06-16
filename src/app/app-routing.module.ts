import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './core/pages/componentes/dialog/dialog.component';

const routes: Routes = [
  {
    path: '**',
    component: DialogComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
