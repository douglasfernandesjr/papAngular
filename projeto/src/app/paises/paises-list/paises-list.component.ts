import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  Paises: Array<Pais>;

  constructor() {


  }

  ngOnInit() {
    this.Paises = [
      new Pais('Brasil', 'BRA'),
      new Pais('Portugal', 'PT')
    ];
  }

  public eventoCallback(dados: Pais) {
    alert('Click no pais: ' + dados.nome);
  }

}