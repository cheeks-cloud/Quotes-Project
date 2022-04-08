export class Quotes {
  
   showAuthor: boolean

  constructor(
    public category: string,
    public quote: string,
    public author: string, 
    public person: string
    // public votes: number
  ){
    this.showAuthor =false
  }


}
