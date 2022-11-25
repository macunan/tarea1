import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';
import { ToolboxCompComponent } from './toolbox-comp/toolbox-comp.component';
import { ContenidoCompComponent } from './contenido-comp/contenido-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCompComponent,
    ToolboxCompComponent,
    ContenidoCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
