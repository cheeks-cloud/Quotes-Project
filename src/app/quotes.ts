export class Quotes {
  
   showAuthor: boolean
   voting: boolean

  constructor(
    public id:number,
    public category: string,
    public thequote: string,
    public author: string, 
    public person: string,
    public upvotes: number,
    public downvotes: number
  ){
    this.showAuthor =false
    this.voting=false
  }


}
