import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material.module';
import { ReghotelsComponent } from './reghotels.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ReghotelsComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule
  ],exports:[ReghotelsComponent]
})
export class ReghotelsModule { }



