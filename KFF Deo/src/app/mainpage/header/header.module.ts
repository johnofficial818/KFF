import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { DemoMaterialModule } from 'src/app/material.module';
import { LoginModule } from 'src/app/login/login.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    LoginModule,

  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
