import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public apiError: boolean = false;
  private setAllPokemons: any;
  public getAllPokemons: any;

  private paginaAtual: number = 1;
  public botaoProximoDesabilitado = true;
  public botaoAnteriorDesabilitado = true;

  constructor(private pokeApiService: PokeApiService) {}

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

    this.carregarPokemons(this.paginaAtual);
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

  public carregarPokemons(pagina: number): void {

    // armazeno o valor da pagina atual
    this.paginaAtual = pagina;

    this.pokeApiService.getPagedPokemons((pagina - 1) * 100).subscribe({
      next: (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;

        // aqui armazeno a quantidade total de pokemons num atributo privado
        this.botaoAnteriorDesabilitado = !(res.previous);
        this.botaoProximoDesabilitado = !(res.next);
      },
      error: (err) => {
        console.error(`Erro ao chamar o pokeApiService: ${err}`);
        this.apiError = true;
      },
    });
  }

  public paginaAnterior(): void {
    this.carregarPokemons(this.paginaAtual - 1);
  }

  public proximaPagina(): void {
    this.carregarPokemons(this.paginaAtual + 1);
  }
}
