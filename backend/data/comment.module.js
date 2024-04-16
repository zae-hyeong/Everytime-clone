const PROFILE_IMG = "anonymous-user-profile.png";

export default class Comment {
  content;
  uploadTime;
  numOfLikes;
  isReplyComment;
  commentId;
  profileImg;
  userName;
  upLoadTimeMeta;

  constructor(
    content,
    numOfLikes,
    isReplyComment,
    profileImg,
    userName
  ) {
    this.content = content;
    this.numOfLikes = numOfLikes;
    this.upLoadTimeMeta = new Date();
    this.isReplyComment = isReplyComment;
    this.userName = userName ? userName : "익명";
    this.profileImg = profileImg ? profileImg : PROFILE_IMG;
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

export const dummyComments = [
  new Comment('우와 정말 대단해요!', 12),
  new Comment('정말 좋은 정보 얻어갑니다!', 3),
  new Comment('난 이 의견에 반대라고 본다, 세상에는 어쩌구 저쩌구 반박시 내말이 맞음', 0)
];
