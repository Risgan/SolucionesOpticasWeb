import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modulos/navegacion/nav/nav.component';
import { PrincipalComponent } from './modulos/inicio/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
