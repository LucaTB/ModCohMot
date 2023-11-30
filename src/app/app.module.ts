import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Exp1Component } from './pages/exp1/exp1.component';
import { Exp2Component } from './pages/exp2/exp2.component';
import { Exp3Component } from './pages/exp3/exp3.component';
import { PdiComponent } from './pages/pdi/pdi.component';
import { NavbarComponent } from './comps/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Exp1Component,
    Exp2Component,
    Exp3Component,
    PdiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
