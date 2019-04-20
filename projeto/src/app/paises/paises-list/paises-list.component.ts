import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PesquisaPaisesService } from '../pesquisa-paises.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  /* Propriedades listagem por idioma */
  lista: string[];
  lang: string;

  Paises: Array<Pais>;

  constructor(private apiRequest: PesquisaPaisesService) {
    this.lista = [];
    this.lang = 'pt';
  }

  ngOnInit() {
    this.atualizarListaPaisesPorIdioma();
  }

  public eventoCallback(dados: Pais) {
    alert('Click no pais: ' + dados.nome);
  }

  public atualizarListaPaisesPorIdioma() {
    this.lista = [];
    this.apiRequest.ListarPaises(this.lang).subscribe(
      (respostaAPI) => {
        for (const item of respostaAPI) {
          this.lista.push(item.name);
        }
      }
    );
  }
}
