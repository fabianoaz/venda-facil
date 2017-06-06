import { Component, OnInit } from '@angular/core';

import { CadProd } from './cad-prod';
import { CadProdService } from './cad-prod.service';

@Component({
  selector: 'app-cad-prod',
  templateUrl: './cad-prod.component.html',
  styleUrls: ['./cad-prod.component.css']
})
export class CadProdComponent implements OnInit {

  produto: CadProd;
  produtos: CadProd[];
  bloqueado: boolean = true;
  edicao: boolean = false;
  alteracao: boolean = false;
  id: number;

  constructor(private servico: CadProdService) { }

  ngOnInit() {
    this.produto = new CadProd();
    this.produtos = this.servico.getProdutos();
  }
  novoProduto() {
    this.bloqueado = false;
    this.edicao = false;
  }

  salvaProduto() {
    if (this.bloqueado == true) {
      alert("Não está em modo de inclusão!");
    }
    else if (this.produto.codigo == null || this.produto.descricao == null || this.produto.precovenda == null) {
      alert("Todos dados do Produto devem ser informados!");
    } else {
      if (this.edicao == false && this.bloqueado == false && this.produto.descricao.length > 0) {
        this.servico.addProduto(this.produto);
        this.produtos = this.servico.getProdutos();
        this.produto = new CadProd();
        alert("Cadastro incluído com sucesso!");
        this.bloqueado = true;
        this.edicao = false;
        this.alteracao = false;
      } else {
        this.produto = new CadProd();
        this.bloqueado = true;
        this.edicao = false;
        this.alteracao = false;
      }
      this.produto = new CadProd();
      this.bloqueado = true;
      this.edicao = false;
      this.alteracao = false;
    }
  }

  editarProduto(id: number) {
    this.bloqueado = true;
    this.edicao = true;
    this.id = id;
    this.produto = this.servico.getProduto(this.id);
  }

  alteraCadastro() {
    if (this.edicao == true) {
      this.bloqueado = false;
      this.alteracao = true;
    }
  }

  excluiProduto() {
    if (this.edicao == true && this.alteracao == false) {
      let resp = confirm("Deseja excluir o registro?");
      if (resp == true) {
        this.servico.excluiProduto(this.id);
        this.id = null;
        this.bloqueado = true;
        this.edicao = false;
        this.produto = new CadProd();
      } else {
        this.cancelaEdicao();
      }
    }
  }

  cancelaEdicao() {
    this.bloqueado = true;
    this.edicao = false;
    this.alteracao = false;
    this.produto = new CadProd;
  }

}
