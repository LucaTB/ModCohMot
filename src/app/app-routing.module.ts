import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { Exp1Component } from 'src/app/pages/exp1/exp1.component';
import { Exp2Component } from 'src/app/pages/exp2/exp2.component';
import { Exp3Component } from 'src/app/pages/exp3/exp3.component';
import { PdiComponent } from 'src/app/pages/pdi/pdi.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'exp1',
    component: Exp1Component,
  },
  {
    path: 'exp2',
    component: Exp2Component,
  },
  {
    path: 'exp3',
    component: Exp3Component,
  },
  {
    path: 'pdi',
    component: PdiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
