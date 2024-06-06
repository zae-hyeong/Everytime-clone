// import anonymousUserProfileImg from "public/img/anonymous-user-profile.png";
const anonymousUserProfileImg = "anonymous-user-profile.png";

export interface IComment {
  content: string;
  uploadTime?: string;
  numOfLikes?: number;
  userName?: string;
  profileImg?: string | undefined;
  isReplyComment?: boolean;
  metaDataOfUploadTime?: Date;
  isMyComment?: boolean;
  commentId?: string;
}

export default class Comment implements IComment {
  content: string;
  uploadTime?: string | undefined;
  numOfLikes?: number | undefined;
  userName?: string | undefined;
  profileImg?: string | undefined;
  isReplyComment?: boolean | undefined;
  metaDataOfUploadTime?: Date | undefined;
  isMyComment?: boolean | undefined;
  commentId? =  Math.random().toString(36).substring(2, 11);

  constructor({
    content,
    numOfLikes = 0,
    profileImg = anonymousUserProfileImg,
    userName = "익명",
    metaDataOfUploadTime = new Date(),
    isReplyComment = false,
    isMyComment = false,
  }: IComment) {
    this.content = content;
    this.numOfLikes = numOfLikes;
    this.userName = userName;
    this.profileImg = profileImg;
    this.metaDataOfUploadTime = metaDataOfUploadTime;
    this.isReplyComment = isReplyComment;
    this.isMyComment = isMyComment;
    this.uploadTime = `${(this.metaDataOfUploadTime.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${this.metaDataOfUploadTime
      .getDate()
      .toString()
      .padStart(2, "0")} ${this.metaDataOfUploadTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${this.metaDataOfUploadTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }
}
