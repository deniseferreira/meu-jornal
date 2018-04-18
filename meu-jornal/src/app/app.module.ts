import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    NoticiasComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
