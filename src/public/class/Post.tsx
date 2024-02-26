export default class Post {
  title: string;
  content: string;
  numOfLikes: number;
  numOfComments: number;
  uploadBefore: string;
  uploader: string;
  attachedImages?: string[];
  board: string; 
  postId: string;
  
  constructor(title:string, content:string,  numOfLikes: number, numOfComments:number, uploadBefore:string, uploader:string, attachedImages: string[], board:string, postId: string) {
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
    this.uploadBefore = uploadBefore;
    this.uploader = uploader;
    this.attachedImages = attachedImages;
    this.postId = postId;
  }
}