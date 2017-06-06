import { Injectable } from '@angular/core';

import { CadEstab } from './cad-estab';

@Injectable()
export class CadEstabService {

  estab: CadEstab =
  {
    cnpj: 1111111111111111,
    ie: 9999999999,
    razsoc: "Razão Social da Clínica.",
    nomfan: "Nome Fantasia da Clínica.",
    endereco: "Endereço da Clínica, 123",
    uf: "RS",
    fone: 33445566
  };

  constructor() { }

  getDadosEstab() {
    return this.estab;
  }


}
