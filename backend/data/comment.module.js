const PROFILE_IMG = "anonymous-user-profile.png";

export default class Comment {
  content;
  uploadTime;
  numOfLikes;
  profileImg;
  userName;
  metaDataOfUploadTime;
  isReplyComment;
  isMyComment;
  commentId = Math.random().toString(36).substring(2, 11);

  constructor({
    content,
    numOfLikes = 0,
    profileImg = PROFILE_IMG,
    userName = "익명",
    metaDataOfUploadTime = new Date(),
    isReplyComment = false,
    isMyComment = false,
  }) {
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

export const dummyComments = [
  new Comment({ content: "우와 정말 대단해요!", numOfLikes: 12 }),
  new Comment({ content: "정말좋은 정보 얻어갑니다!", numOfLikes: 3 }),
  new Comment({
    content:
      "난 이 의견에 반대라고 본다, 세상에는 어쩌구 저쩌구 반박시 내말이 맞음",
    numOfLikes: 0,
  }),
];
