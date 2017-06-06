import { Component, OnInit } from '@angular/core';

import { CadUser } from './cad-user';
import { CadUserService } from './cad-user.service';

@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html',
  styleUrls: ['./cad-user.component.css']
})
export class CadUserComponent implements OnInit {

  usuario: CadUser;
  usuarios: CadUser[];
  bloqueado: boolean = true;
  edicao: boolean = false;
  alteracao: boolean = false;
  id: number;

  constructor(private servico: CadUserService) { }

  ngOnInit() {
    this.usuario = new CadUser();
    this.usuarios = this.servico.getUsuarios();
  }

  novoUsuario() {
    this.bloqueado = false;
    this.edicao = false;
  }

  salvaUsuario() {
    if (this.bloqueado == true) {
      alert("Não está em modo de inclusão!");
    }
    else if (this.usuario.cpf == null || this.usuario.endereco == null || this.usuario.nome == null || this.usuario.usuario == null) {
      alert("Todos dados do Usuário devem ser informados!");
    } else {
      if (this.edicao == false && this.bloqueado == false && this.usuario.nome.length > 0) {
        this.servico.addUsuario(this.usuario);
        this.usuarios = this.servico.getUsuarios();
        this.usuario = new CadUser();
        alert("Cadastro incluído com sucesso!");
        this.bloqueado = true;
        this.edicao = false;
        this.alteracao = false;
      } else {
        this.usuario = new CadUser();
        this.bloqueado = true;
        this.edicao = false;
        this.alteracao = false;
      }
      this.usuario = new CadUser();
      this.bloqueado = true;
      this.edicao = false;
      this.alteracao = false;
    }
  }

  editarUsuario(id: number) {
    this.bloqueado = true;
    this.edicao = true;
    this.id = id;
    this.usuario = this.servico.getUsuario(this.id);
  }

  alteraCadastro() {
    if (this.edicao == true) {
      this.bloqueado = false;
      this.alteracao = true;
    }
  }

  excluiUsuario() {
    if (this.edicao == true && this.alteracao == false) {
      let resp = confirm("Deseja excluir o registro?");
      if (resp == true) {
        this.servico.excluiUsuario(this.id);
        this.id = null;
        this.bloqueado = true;
        this.edicao = false;
        this.usuario = new CadUser();
      } else {
        this.cancelaEdicao();
      }
    }
  }

  cancelaEdicao() {
    this.bloqueado = true;
    this.edicao = false;
    this.alteracao = false;
    this.usuario = new CadUser();
  }



}
