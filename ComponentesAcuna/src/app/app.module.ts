import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ContenidoCompComponent } from './contenido-comp/contenido-comp.component';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';
import { ToolboxCompComponent } from './toolbox-comp/toolbox-comp.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SantiagoComponent } from './santiago/santiago.component';
import { ValparaisoComponent } from './valparaiso/valparaiso.component';
const appRoute: Routes = [
{path:'',component:HomeComponent },
{path:'Home',component:HomeComponent },
{path:'Santiago',component:SantiagoComponent} ,
{path:'Valparaiso',component:ValparaisoComponent} ,
{path:'About',component:AboutComponent} 
];
@NgModule({
  declarations: [
    AppComponent,
    ContenidoCompComponent,
    NavbarCompComponent,
    ToolboxCompComponent,
    HomeComponent,
    AboutComponent,
    SantiagoComponent,
    ValparaisoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
