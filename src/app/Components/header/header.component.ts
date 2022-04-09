import { Component, OnInit,Input, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Input() addQuote = "Add A Qoute"
  // @Output()evennt = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
// <button>Add A Qoute</button>
  






}
