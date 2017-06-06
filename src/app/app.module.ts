import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
/* -- Meus Componentes -- */
import { CadProdComponent } from './cad-prod/cad-prod.component';
import { CadUserComponent } from './cad-user/cad-user.component';
import { CadEstabComponent } from './cad-estab/cad-estab.component';
import { PdvComponent } from './pdv/pdv.component';
import { HomeComponent } from './home/home.component';
import { CadCliComponent } from './cad-cli/cad-cli.component';
import { routing } from './app.routing';
/* -- Serviços -- */
import { CadEstabService } from './cad-estab/cad-estab.service';
import { CadProdService } from './cad-prod/cad-prod.service';
import { CadUserService } from './cad-user/cad-user.service';
import { CadCliService } from './cad-cli/cad-cli.service';
import { PdvService } from "app/pdv/pdv.service";

@NgModule({
  declarations: [
    AppComponent,
    CadProdComponent,
    CadUserComponent,
    CadEstabComponent,
    PdvComponent,
    HomeComponent,
    CadCliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    routing
  ],
    providers:[CadEstabService,CadProdService,CadUserService,CadCliService,PdvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
