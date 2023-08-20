import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './footer/footer.module';
import { MainpageComponent } from './mainpage.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material.module';



@NgModule({
  declarations: [ MainpageComponent ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    RouterModule
  ]
})
export class MainpageModule { }
