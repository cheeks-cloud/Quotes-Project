import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quotes } from 'src/app/quotes'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,"","","","",0,0);
  @Output() addQuote = new EventEmitter<Quotes>();

  constructor() { }

  ngOnInit(): void {
  }

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

}
