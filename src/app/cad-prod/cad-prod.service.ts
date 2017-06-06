import { Injectable } from '@angular/core';

import { CadProd } from './cad-prod';

@Injectable()
export class CadProdService {

  produtos: CadProd[] = [];
  produtosVenda: CadProd[] = [];

  constructor() { }

  getProdutos() {
    return this.produtos;
  }

  getProduto(id: number) {
    return this.produtos[id];
  }

  addProduto(produto: CadProd) {
    this.produtos.push(produto);
  }

  excluiProduto(id: number) {
    this.produtos.splice(id, 1);
  }

}
