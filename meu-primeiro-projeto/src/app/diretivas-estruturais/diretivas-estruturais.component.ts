import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Bruno Rocha", idade:27},
    { nome: "biel", idade:20},
    { nome: "Vitor", idade:23}
  ]

  public nome: string = 'dener'
  constructor(){ }

  ngOnInit(): void {
    
    setInterval( ()=>{
      if (this.condition) {
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000)
  }
  public onClick(){
    if (this.conditionClick) {
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "nay", idade: 31});
  }
  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

}
