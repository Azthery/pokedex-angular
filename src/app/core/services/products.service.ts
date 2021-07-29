import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  public getGeneralInfoPokemon(): Observable<Pokemon[]> {
    return this.http.get <Pokemon []>(`${environment.url_api}pokemon/`);
  }

  getPokemon(id: any): Observable<Pokemon>{
    return this.http.get <Pokemon>(`${environment.url_api}pokemon/${id}`);
  }

}
