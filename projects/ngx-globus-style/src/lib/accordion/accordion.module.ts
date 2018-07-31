import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule { }
