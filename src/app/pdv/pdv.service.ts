import { Injectable } from '@angular/core';

import { CadProd } from './../cad-prod/cad-prod';
import { ProdVnd } from "app/pdv/prod-vnd";

@Injectable()
export class PdvService {

  produtosvenda: ProdVnd[] = [];

  constructor() { }

  addProdVnd(prod: ProdVnd){
    this.produtosvenda.push(prod);
  }

  getProdVenda(){
    return this.produtosvenda;
  }

}
