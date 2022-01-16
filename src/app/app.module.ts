import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoComponent } from './componentes/disco/disco.component';
import { ListaDiscosComponent } from './componentes/lista-discos/lista-discos.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoComponent,
    ListaDiscosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
