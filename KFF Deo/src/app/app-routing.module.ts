import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewhotelComponent } from './addnewhotel/addnewhotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { GshotelComponent } from './Hotels/gshotel/gshotel.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainpageModule } from './mainpage/mainpage.module';
import { ReghotelsComponent } from './reghotels/reghotels.component';
import { SignupComponent } from './signup/signup.component';
import { TodaysofferComponent } from './todaysoffer/todaysoffer.component';

const routes: Routes = [
  
  {path: '', pathMatch: 'full', redirectTo: 'login'
},
{
  path: 'login', pathMatch: 'prefix',
  loadChildren: () => import('./login/login.module').then(a => a.LoginModule)
},
{ path: 'addnewhotel' , component: AddnewhotelComponent },
{ path: 'forgetpassword' , component:ForgetpasswordComponent },
{ path: 'reghotel',component:ReghotelsComponent },
{ path: 'signup', component:SignupComponent},

{
  path: 'mainpage', component: MainpageComponent,

  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(a => a.DashboardModule)
    },
    { path: 'todaysoffer', component: TodaysofferComponent },
    { path: 'hotel/:param1', component: GshotelComponent },
  
  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
