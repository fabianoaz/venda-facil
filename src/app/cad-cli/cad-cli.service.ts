import { Injectable } from '@angular/core';

import { CadCli } from './cad-cli';

@Injectable()
export class CadCliService {

  clientes: CadCli[] = [];

  constructor() { }

  getClientes() {
    return this.clientes;
  }

  getCliente(id: number) {
    return this.clientes[id];
  }

  addCliente(cliente: CadCli) {
    this.clientes.push(cliente);
  }

  excluiCliente(id: number) {
    this.clientes.splice(id,1);
  }

}
