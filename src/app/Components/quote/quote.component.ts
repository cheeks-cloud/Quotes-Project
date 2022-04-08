import { Component, OnInit } from '@angular/core';
import { Quotes} from 'src/app/quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quotes[]=[
    new Quotes( "","","","")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
