import { Component, OnInit } from '@angular/core';
import { BoloStoreService } from '../bolo-store.service';

@Component({
  selector: 'app-bolo-list',
  templateUrl: './bolo-list.component.html',
  styleUrls: ['./bolo-list.component.css']
})
export class BoloListComponent implements OnInit {

  novo: string;
  showOne: boolean;

  constructor(private boloStore: BoloStoreService) {
    this.showOne = false;
  }

  ngOnInit() {
  }

  clickNovo() {
    if (this.novo !== undefined && this.novo.trim().length > 0) {
      this.boloStore.adicionar(this.novo);
      this.novo = '';
    }
  }
}
