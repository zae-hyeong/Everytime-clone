export interface IPost {
  title: string;
  content: string;
  uploadTime?: string;
  board?: string;
  postId?: string;
  uploadTimeMeta?: Date;
  numOfLikes?: number;
  numOfComments?: number;
  uploader?: string;
  attachedImages?: string[];
  isMyPost?: boolean;
}

export default class Post implements IPost {
  title: string;
  content: string;
  uploadTime?: string;
  board?: string;
  uploadTimeMeta?: Date;
  numOfLikes?: number;
  numOfComments?: number;
  uploader?: string;
  attachedImages?: string[];
  isMyPost?: boolean;
  readonly postId? = Math.random().toString(36).substring(2, 11);

  constructor({
    title,
    content,
    board = "자유게시판", //임시 조치
    uploader = "익명",
    attachedImages = [],
    numOfLikes = 0,
    numOfComments = 0,
    uploadTimeMeta = new Date(),
    isMyPost = false
  }: IPost) {
    this.title = title;
    this.content = content;
    this.board = board;
    this.numOfLikes = numOfLikes;
    this.numOfComments = numOfComments;
    this.uploader = uploader;
    this.attachedImages = attachedImages;
    this.uploadTimeMeta = uploadTimeMeta;
    this.isMyPost = isMyPost;
    this.uploadTime = `${(this.uploadTimeMeta.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${this.uploadTimeMeta
      .getDate()
      .toString()
      .padStart(2, "0")} ${this.uploadTimeMeta
      .getHours()
      .toString()
      .padStart(2, "0")}:${this.uploadTimeMeta
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
}
