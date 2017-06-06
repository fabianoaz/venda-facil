import { Component, OnInit } from '@angular/core';

import {CadEstab} from './cad-estab';
import { CadEstabService } from './cad-estab.service';

@Component({
  selector: 'app-cad-estab',
  templateUrl: './cad-estab.component.html',
  styleUrls: ['./cad-estab.component.css']
})
export class CadEstabComponent implements OnInit {

  estab: CadEstab;
  bloqueado: boolean = true;

  constructor(private servico: CadEstabService) { }

  ngOnInit() {
    this.estab = new CadEstab;
    this.estab = this.servico.getDadosEstab();
  }

  alterarEstab() {
    this.bloqueado = false;
  }

  salvarEstab() {
    this.bloqueado = true;
  }

}
