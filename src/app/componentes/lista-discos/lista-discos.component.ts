import { Component, OnInit } from '@angular/core';
import { Disco } from '../../../models/disco.models';

@Component({
  selector: 'app-lista-discos',
  templateUrl: './lista-discos.component.html',
  styleUrls: ['./lista-discos.component.css']
})
export class ListaDiscosComponent implements OnInit {

  listaDiscos: Disco[];

  constructor() {
    this.listaDiscos = [];
   }

  ngOnInit(): void {
  }

  agregarDisco(titulo: string, artista: string, fechaLanzamiento: string, urlImagen: string) {
    this.listaDiscos.push(new Disco(titulo, artista, fechaLanzamiento, urlImagen));
    return false;
  }

}