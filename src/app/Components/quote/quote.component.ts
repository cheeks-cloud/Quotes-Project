import { Component, OnInit,Input } from '@angular/core';
import { Quotes} from 'src/app/quotes'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes( 1, "Life Quote","The greatest glory in living lies not in never falling, but in rising every time we fall","Nelson Mandela","Gianna",0,0,new Date(2018,6,9)),
    new Quotes( 2,"Positive Quote","The most positive men are the most credulous.","Alexander Pope","Adriana",0,0,new Date(2022,6,9)),
    new Quotes( 3,"Inspiration Quote","Success is not final, failure is not fatal: it is the courage to continue that counts","Winston Churchill","Gloria",0,0,new Date(2021,6,9)),
    new Quotes( 4, "Life Quote","If life were predictable it would cease to be life, and be without flavor","Eleanor Roosevelt","Duke",0,0,new Date(2018,6,9)),
    new Quotes( 5,"Inspiration Quote","You are never too old to set another goal or to dream a new dream.","Malala Yousafzai","Ken",0,0,new Date(2020,6,9)),
    new Quotes( 6,"Depression Quote","Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.","Henry Wadsworth","Agnes",0,0,new Date(2019,6,9)),
  ];
   

   showAddItem = false;

  constructor() { }

  ngOnInit(): void {
  }
  headerBtnClick(str: string){
    console.log(str)
    if(str==='btn1'){
      this.showAddItem = !this.showAddItem;
      return;
    }
  
  }

  //function to toggle quote detail
  toggleDetails( index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  //function to add a NEW quote

 addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+ 1
   this.quotes.push(quote)

 }

 //to delete quote
deleteQuote(isDone,index){
  if(isDone){
    let toDelete = confirm(`Are you sure you want to delete${this.quotes[index].thequote}?`)
  
    if(isDone){
      this.quotes.splice(index, 1)
    }
  
  }
}










  // VoteCount(index: number): void {}
 
  // voteCount(i: number){
  //   let noVotes=0
  //   if(this.quotes[i].voting = true){
  //     console.log(noVotes +=1)
  //   // }else if(this.quotes[i].voting = true && this.quotes[i]=true){
  //   //    console.log(i ++1)
  //   }
  // }
// voteCount(i: number){
//   let count = i;
//   return function inner(){
//     count++;
//      console.log( count );
//   }
// };
//you get the hishest
// arr:numberss[]=this.quotes.map(quote=>quote.upvotes)
// highest = math.max(...this.arr)


}


