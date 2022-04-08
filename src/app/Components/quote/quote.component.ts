import { Component, OnInit } from '@angular/core';
import { Quotes} from 'src/app/quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quotes[]=[
    new Quotes( "Life Quote","The greatest glory in living lies not in never falling, but in rising every time we fall","Nelson Mandela","Gianna"),
    new Quotes( "Positive Quote","The most positive men are the most credulous.","Alexander Pope","Adriana"),
    new Quotes( "Inspiration Quote","Success is not final, failure is not fatal: it is the courage to continue that counts","Winston Churchill","Gloria"),
    new Quotes( "Life Quote","If life were predictable it would cease to be life, and be without flavor","Eleanor Roosevelt","Duke"),
    new Quotes( "Inspiration Quote","You are never too old to set another goal or to dream a new dream.","Malala Yousafzai","Ken"),
    new Quotes( "Depression Quote","Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.","Henry Wadsworth","Agnes")
    

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
