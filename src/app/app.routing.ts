import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadEstabComponent } from './cad-estab/cad-estab.component';
import { CadUserComponent } from './cad-user/cad-user.component';
import { CadCliComponent } from './cad-cli/cad-cli.component';
import { CadProdComponent } from './cad-prod/cad-prod.component';
import { PdvComponent } from './pdv/pdv.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'estab', component: CadEstabComponent },
    { path: 'user', component: CadUserComponent },
    { path: 'cli', component: CadCliComponent },
    { path: 'prod', component: CadProdComponent },
    { path: 'pdv', component: PdvComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);