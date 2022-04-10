import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quotes } from 'src/app/quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input() quote: Quotes;
 @Output() isDone = new EventEmitter<boolean>()
 @Output() isclicked = new EventEmitter<boolean>()


 upvotes = 0
  constructor() { }

  ngOnInit(): void {
  }

  quoteDiscard(complete: boolean) {
    this.isDone.emit(complete)

  }
  

  clickCount(): void{
    this.upvotes++
  }

}
