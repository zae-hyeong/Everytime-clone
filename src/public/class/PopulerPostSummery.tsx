export default class PopulerPostSummery {
  title: string;
  content: string;
  board: string;
  numOfLikes: number;
  numOfComments: number;
  
  constructor(title:string, content:string, board:string, numOfLikes: number, numOfComments:number) {
  
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
  }
}