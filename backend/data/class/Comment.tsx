import anonymousUserProfileImg from "public/img/anonymous-user-profile.png";

export default class Comment {
  content: string;
  uploadTime: string;
  numOfLikes: number;
  isReplyComment?: boolean;
  commentId: string;
  profileImg?: string | undefined;
  userName?: string | undefined;
  upLoadTimeMeta?: Date;

  constructor(
    content: string,
    numOfLikes: number,
    isReplyComment: boolean = false,
    profileImg?: string,
    userName?: string
  ) {
    this.content = content;
    this.numOfLikes = numOfLikes;
    this.upLoadTimeMeta = new Date();
    this.isReplyComment = isReplyComment;
    this.userName = userName ? userName : "익명";
    this.profileImg = profileImg ? profileImg : anonymousUserProfileImg;
    this.commentId = Math.random().toString(36).substring(2, 11);
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
