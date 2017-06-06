import { Component, OnInit } from '@angular/core';

import { CadProd } from './../cad-prod/cad-prod';
import { CadProdService } from '../cad-prod/cad-prod.service';
import { ProdVnd } from "app/pdv/prod-vnd";
import { PdvService } from "app/pdv/pdv.service";

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.css']
})
export class PdvComponent implements OnInit {

  produtos: CadProd[]; //-- Produtos do cadastro de Produtos
  prodselectcod: number;
  prodselectdsc: string;
  prodselectvlr: number;
  prodtvlritem: number;
  qtd: number = 1;
  codigo: number;
  descricao: string;
  qtdvnd: number;
  vlr: number;
  vlrtotal: number;


  prodVnd: ProdVnd;
  prodsVnd: ProdVnd[];

  
  constructor(private servico: CadProdService, private servpdv: PdvService) { }

  ngOnInit() {

    this.produtos = this.servico.getProdutos(); //-- Produtos do cadastro de produtos

    //this.prodVnd = new ProdVnd();
    this.prodsVnd = this.servpdv.getProdVenda();

    /*
        this.produtos = [
          {codigo: 123 , descricao: "Produto 1" , precovenda: 1.99},
          {codigo: 456 , descricao: "Produto 2" , precovenda: 2.99},
          {codigo: 789 , descricao: "Produto 3" , precovenda: 3.99},
          ];
    */ 

    /*
          this.produtosvenda = [
            {cod: 123 , desc: "Produto 1" , qtd: 1, vlr:1.99, vlrtot: 1.99},
            {cod: 456 , desc: "Produto 2" , qtd: 2, vlr:2.99, vlrtot: 5.98},
            {cod: 789 , desc: "Produto 3" , qtd: 3, vlr:3.99, vlrtot: 11.97},
          ];
      */

  }

  incluiItem() {
    alert("Produto incluído");
  }

  salvaVenda() {
    alert("Venda Salva");
  }

  cancelaVenda() {
    alert("Venda Cancelada");
  }

  selecionaprod(cod: number, dsc: string, vlr: number) {
    this.qtd = 1;
    this.prodselectcod = cod;
    this.prodselectdsc = dsc;
    this.prodselectvlr = vlr;
    this.prodtvlritem = this.prodselectvlr * this.qtd;
  }

  mudaqtd() {
    this.prodtvlritem = this.prodselectvlr * this.qtd;
  }

  addprodvenda(cod: number, desc: string, qtd: number, vlr: number, vlrtot: number) {
    this.prodVnd = new ProdVnd();
    this.prodVnd.cod = cod;
    this.prodVnd.desc = desc;
    this.prodVnd.qtd = qtd;
    this.prodVnd.vlr = vlr;
    this.prodVnd.vlrtot = vlrtot;
    this.servpdv.addProdVnd(this.prodVnd);
    this.prodsVnd = this.servpdv.getProdVenda();
  }

}
