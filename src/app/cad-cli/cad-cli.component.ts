import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

import { CadCli } from './cad-cli';
import { CadCliService } from './cad-cli.service';

@Component({
  selector: 'app-cad-cli',
  templateUrl: './cad-cli.component.html',
  styleUrls: ['./cad-cli.component.css']
})
export class CadCliComponent implements OnInit {

  cliente: CadCli;
  clientes: CadCli[];
  bloqueado: boolean = true;
  edicao: boolean = false;
  alteracao: boolean = false;
  id: number;

  constructor(private servico: CadCliService) { }

  ngOnInit() {
    this.cliente = new CadCli();
    this.clientes = this.servico.getClientes();
  }

  novoCliente() {
    this.bloqueado = false;
    this.edicao = false;
  }

  salvaCliente() {
    if (this.bloqueado == true) {
      alert("Não está em modo de inclusão!");
    }
    else if (this.cliente.cpf == null || this.cliente.endereco == null || this.cliente.nome == null || this.cliente.telefone == null) {
      alert("Todos dados do Cliente devem ser informados!");
    } else {
      if (this.edicao == false && this.bloqueado == false && this.cliente.nome.length > 0) {
        this.servico.addCliente(this.cliente);
        this.clientes = this.servico.getClientes();
        this.cliente = new CadCli();
        alert("Cadastro incluído com sucesso!");
        this.bloqueado = true;
        this.edicao = false;
        this.alteracao = false;
      } else {
        this.cliente = new CadCli();
        this.bloqueado = true;
        this.edicao = false;
        this.alteracao = false;
      }
      this.cliente = new CadCli();
      this.bloqueado = true;
      this.edicao = false;
      this.alteracao = false;
    }
  }

  editarCliente(id: number) {
    this.bloqueado = true;
    this.edicao = true;
    this.id = id;
    this.cliente = this.servico.getCliente(this.id);
  }

  alteraCadastro() {
    if (this.edicao == true) {
      this.bloqueado = false;
      this.alteracao = true;
    }
  }

  excluiCliente() {
    if (this.edicao == true && this.alteracao == false) {
      let resp = confirm("Deseja excluir o registro?");
      if (resp == true) {
        this.servico.excluiCliente(this.id);
        this.id = null;
        this.bloqueado = true;
        this.edicao = false;
        this.cliente = new CadCli();
      } else {
        this.cancelaEdicao();
      }
    }
  }

  cancelaEdicao() {
    this.bloqueado = true;
    this.edicao = false;
    this.alteracao = false;
    this.cliente = new CadCli();
  }

}
