import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  // private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  // configurando query parameter para paginação

  // offset é a partir de que pokemon é pra mostrar
  private pokemonAPartirDe: number = 0

  // limite de pokemons por pagina
  private limiteDePokemonsPorPagina: number = 100

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemon(): Observable<any> {
    return this.http.get<any>(this.url, {
      params: {
        offset: this.pokemonAPartirDe,
        limit: this.limiteDePokemonsPorPagina
      }
    }).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}