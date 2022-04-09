export class Quotes {
  
   showDescription: boolean;  
  

  constructor(
    public id:number,
    public category: string,
    public thequote: string,
    public author: string, 
    public person: string,
    public upvotes: number,
    public downvotes: number,
    public completeDate: Date
  ){
    this.showDescription =false
  
  }


}
