import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './components/pokemons/pokemons.component';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogComponent } from './components/dialog/dialog.component';
import { NoScriptPipe } from './pipes/no-script.pipe';

@NgModule({
  declarations: [
    PokemonsComponent,
    DialogComponent,
    NoScriptPipe
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
