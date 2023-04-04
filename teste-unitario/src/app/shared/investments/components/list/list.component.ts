import { Component, OnInit } from '@angular/core';

//Model
import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public investments: Array<Investments> =[
    {
      name: "Itaú",
      value: 100
    },
    {
      name: "Banco do Brasil",
      value: 100
    },
    {
      name: "Nubank",
      value: 100
    },
    {
      name: "Inter",
      value: 100
    }
  ]

  constructor(private listInvestmentsService: ListInvestmentsService) {}

  ngOnInit(): void {
    this.listInvestmentsService.list().subscribe(
      res => console.log(res)
    )
  }
}
