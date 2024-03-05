export default class Post {
  title: string;
  content: string;
  uploadTime: string;
  board: string;
  postId: string;
  upLoadTimeMeta: Date;
  numOfLikes: number;
  numOfComments: number;
  uploader: string;
  attachedImages?: string[];

  constructor(
    title: string,
    content: string,
    board: string,
    uploader: string = "익명",
    attachedImages: string[],
    numOfLikes: number = 0,
    numOfComments: number = 0,
  ) {
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
    this.uploader = uploader;
    this.attachedImages = attachedImages;
    this.postId = Math.random().toString(36).substring(2, 11);
    this.upLoadTimeMeta = new Date();
    this.uploadTime = `${(this.upLoadTimeMeta.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${this.upLoadTimeMeta
      .getDate()
      .toString()
      .padStart(2, "0")} ${this.upLoadTimeMeta
      .getHours()
      .toString()
      .padStart(2, "0")}:${this.upLoadTimeMeta
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
}
