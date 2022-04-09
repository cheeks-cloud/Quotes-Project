import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 //add propery values 

 showAddQuote:boolean = false;





  constructor() { }

  ngOnInit(): void {
  }

  toggleAddQuote(){
    this.showAddQuote = ! this.showAddQuote;
  }






}
