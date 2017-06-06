import { Injectable } from '@angular/core';

import { CadUser } from './cad-user';

@Injectable()
export class CadUserService {

  usuarios: CadUser[] = [];

  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }

    getUsuario(id: number) {
    return this.usuarios[id];
  }

  addUsuario(usuario: CadUser) {
    this.usuarios.push(usuario);
  }

  excluiUsuario(id: number){
    this.usuarios.splice(id,1);
  }

}
