import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--
    <app-title *ngIf="destruir"></app-title>
    br
    <button (click)="destruirComponent()">Destruir componente</button>


  
  <app-diretivas-atributos>
    <h1>Aulas de Diretivas Atributos</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>
  
  <app-diretivas-atributos>
    <h1>Bruno Rocha</h1>
    <h3>Vitor Rocha</h3>
  </app-diretivas-atributos>
  
  
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-new-component></app-new-component>
  
  <app-input [contador]="addValue"></app-input>
  <button (click)="add()"> Add </button>
 
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>

  <app-output (enviarDados)="setDados($event)"></app-output>

  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-data-biding></app-data-biding>
  -->
  
  


  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit{
  
  public addValue = 0;
  public getDados: {nome: string, idade: number} | undefined;

  public nome: string = "Bruno";
  public idade: number = 28;
  public maisUm: number = 1;


  public checkedDisabled: boolean = true
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/01/como-criar-site-400x250.jpg"
  public imgTitle: string = "Property Binding"
  
  public position: {x:number, y:number} = {x:0, y:0};

  @Output() public enviarDados = new EventEmitter
  /*
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Bruno", idade: 26}
    {nome: "Vitor", idade: 21}
    {nome: "Luis", idade: 36}
  ]*/

  constructor() {}
  
  ngOnInit(): void{}

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }

  public add(){
    this.addValue += 1
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}