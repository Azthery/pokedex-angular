import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products.service';
import { Pokemon } from '../../../core/models/pokemon.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './pokemons.component.html',
  styleUrls: [
    './pokemons.component.scss',
    '../../../shared/styles/typepokemon.style.scss'
  ]
})

export class PokemonsComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  private pokemonToDisplay = 100;
  // private pokemonToDisplay = 5;
  public actualPage = 1;
  public numTotalPokemons = 898;

  length = 100;
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {
    this.updatePokemon(this.actualPage);
  }

  ngOnInit(): void { }

  private fetchPokemon(id: any): void{
    this.productsService.getPokemon(id)
      .subscribe(data => {
        this.pokemons[id] = data;
        console.log(this.pokemons.length);
      });
  }

  updatePokemon(numPage): void{
    this.pokemons = [];
    for (let i = this.pokemonToDisplay * (numPage - 1); i <= this.pokemonToDisplay * numPage; i++){
      this.fetchPokemon(i);
    }
  }

  openInfoDialog(pokemon): void{
    this.dialog.open( DialogComponent,
      {width: '400px', data: pokemon} );
  }
}
