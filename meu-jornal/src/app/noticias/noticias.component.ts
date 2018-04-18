import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: string[] = ["Noticia 1", "Noticia 2", "Noticia 3", "Noticia 4"];

  mostrarNoticia: boolean = true;
 
  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia(){
    this.mostrarNoticia = false;
  }

  public retornarNoticia(){
    this.mostrarNoticia = true;
  }

}
