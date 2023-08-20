import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { DemoMaterialModule } from '../material.module';
import { LoginComponent } from './login.component';
import { BillService } from '../bill.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule
  ],exports:[LoginComponent],
  providers:[]
})
export class LoginModule {


 }


