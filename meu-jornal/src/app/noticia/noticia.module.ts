import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasComponent } from '../noticias/noticias.component';
import { AlertaComponent } from '../alerta/alerta.component';
import { PrimeiroExemploComponent } from '../primeiro-exemplo/primeiro-exemplo.component';
import { SegundoExemploComponent } from '../segundo-exemplo/segundo-exemplo.component';
import { TerceiroExemploComponent } from '../terceiro-exemplo/terceiro-exemplo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NoticiasComponent,
    AlertaComponent,
    PrimeiroExemploComponent,
    SegundoExemploComponent,
    TerceiroExemploComponent
  
  ],

  exports: [
    NoticiasComponent
  ]
})
export class NoticiaModule { }
