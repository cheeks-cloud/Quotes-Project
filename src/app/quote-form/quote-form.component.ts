import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quotes } from 'src/app/quotes'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // category: string;
  // author: string;
  // thequote: string;
  // person: string;

  newQuote = new Quotes(0,"","","","",0,0,new Date ());
  @Output() addQuote = new EventEmitter<Quotes>();
  

  constructor() { }

  ngOnInit(): void {
  }


  submitQuote(newQuote,quoteform){
    if(newQuote.name =='' || newQuote.author ==''){
      return;
    }else{
      this.addQuote.emit(newQuote);
      console.log(newQuote)
      quoteform.reset()
    }
  }
  
  

}
