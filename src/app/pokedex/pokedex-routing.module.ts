import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [{
    path: '',
    component: PokemonsComponent
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexRoutingModule { }
