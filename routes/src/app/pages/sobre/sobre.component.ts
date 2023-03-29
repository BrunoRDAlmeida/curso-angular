import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{
  
  constructor(private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)
    )
    this.ActivatedRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
}