export default class PostSummeryDetail {
  title: string;
  content: string;
  board: string;
  numOfLikes: number;
  numOfComments: number;
  postId: string;
  
  constructor(title:string, content:string, board:string, numOfLikes: number, numOfComments:number) {
  
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
    this.postId = Math.random().toString(36).substring(2, 11);
  }
}