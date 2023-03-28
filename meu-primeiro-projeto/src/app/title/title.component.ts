import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges{
  
  public title:string = "Bem vindo!";
  
  constructor() {}
  
  ngOnInit() {}

  ngOnChanges(): void {
    
  }
}
