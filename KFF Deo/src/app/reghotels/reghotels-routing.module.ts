import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReghotelsComponent } from './reghotels.component';


const routes: Routes = [{
  path: 'reghotel',
  component: ReghotelsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReghotelsRoutingModule { }
