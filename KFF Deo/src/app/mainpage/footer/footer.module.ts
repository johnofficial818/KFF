import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { DemoMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,DemoMaterialModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
