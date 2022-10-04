import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { PokeDetail } from '../interfaces/PokeDetail';
import { PokeList, PokemItem } from '../interfaces/PokeList';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  urlApi: string='https://pokeapi.co/api/v2/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  
  getListPokemon(): Observable<PokemItem[]>  {
    const url = this.urlApi + 'pokemon?limit=10&offset=0';  
    return this.http.get<PokeList>(url, this.httpOptions).pipe(
      map((response: PokeList) => {
        return response.results;
      })
    );
  }

  getDetailPokemon(pokemonName: String):Observable<PokeDetail>{
    const url = this.urlApi + `pokemon?${pokemonName}`;
    return this.http.get<PokeDetail>(url,this.httpOptions);

  }
}
