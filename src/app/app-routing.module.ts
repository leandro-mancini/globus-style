import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComecandoComponent } from './core/pages/introducao/comecando/comecando.component';
import { CoresTemaComponent } from './core/pages/styleguide/cores-tema/cores-tema.component';
import { TypographyComponent } from './core/pages/styleguide/typography/typography.component';
import { BehaviorComponent } from './core/pages/styleguide/behavior/behavior.component';
import { ClassesFuncionaisComponent } from './core/pages/styleguide/classes-funcionais/classes-funcionais.component';

import { DialogComponent } from './core/pages/componentes/dialog/dialog.component';
import { ToastComponent } from './core/pages/componentes/toast/toast.component';

const routes: Routes = [
  {
    path: 'Comecando',
    component: ComecandoComponent
  },
  {
    path: 'Styleguide/Cores',
    component: CoresTemaComponent
  },
  {
    path: 'Styleguide/Typography',
    component: TypographyComponent
  },
  {
    path: 'Styleguide/Behavior',
    component: BehaviorComponent
  },
  {
    path: 'Styleguide/ClassesFuncionais',
    component: ClassesFuncionaisComponent
  },
  {
    path: 'Components/Dialog',
    component: DialogComponent
  },
  {
    path: 'Components/Toast',
    component: ToastComponent
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
