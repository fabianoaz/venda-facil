import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdvService } from "app/pdv/pdv.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [PdvService],
})
export class PdvModule { }
