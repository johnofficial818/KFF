import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { GshotelComponent } from './Hotels/gshotel/gshotel.component';
import { TodaysofferComponent } from './todaysoffer/todaysoffer.component';
import { SignupComponent } from './signup/signup.component';
import { ReghotelsComponent } from './reghotels/reghotels.component';
import { FormsModule } from '@angular/forms';
import { ReghotelsModule } from './reghotels/reghotels.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { AddnewhotelComponent } from './addnewhotel/addnewhotel.component';



@NgModule({
  declarations: [
    AppComponent,GshotelComponent,TodaysofferComponent,SignupComponent,AddnewhotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MainpageModule,
    ReghotelsModule,
    FormsModule,
    HttpClientModule,
    LoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
