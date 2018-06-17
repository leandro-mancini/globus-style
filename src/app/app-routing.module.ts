import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComecandoComponent } from './core/pages/introducao/comecando/comecando.component';
import { DialogComponent } from './core/pages/componentes/dialog/dialog.component';

const routes: Routes = [
  {
    path: 'Comecando',
    component: ComecandoComponent
  },
  {
    path: '**',
    component: ComecandoComponent
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
