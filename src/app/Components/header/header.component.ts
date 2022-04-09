import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 //add propery values 
showAddItem:boolean = false;
  @Input() color: string;
   @Input() btn1 = "Add New Quote" 
   @Output() btnPress = new EventEmitter()





  constructor() { }

  ngOnInit(): void {
  }

  // toggleAddQuote(){
  //   this.showAddQuote = ! this.showAddQuote;
  // }


btnPressEvent = (str: string) => {
  this.btnPress.emit(str);
}
// onclick(){
//   this.btnClick.emit()
// }


}
