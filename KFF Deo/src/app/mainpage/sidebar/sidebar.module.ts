import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {RouterModule} from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
