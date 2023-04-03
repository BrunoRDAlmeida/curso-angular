import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public apiError: boolean = false;
  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {

    // SINTAXE ANTIGA, VAI SER REMOVIDA NA VERSAO 8 DO RXJS
    // this.pokeApiService.apiListAllPokemon.subscribe(
    //   res => {
    //     this.setAllPokemons = res.results;
    //     this.getAllPokemons = this.setAllPokemons;
    //   },
    //   error => {
    //     this.apiError = true;
    //   }
    // );

    this.pokeApiService.apiListAllPokemon.subscribe({
      next: (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error: (err) => {
        console.error(`Erro ao chamar o pokeApiService: ${err}`)
        this.apiError = true;
      }
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })

    this.getAllPokemons = filter;
  }
}
