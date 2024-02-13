export default class PostSummery {
  postTitle: string;
  uploadBefore: string;

  constructor(postTitle: string, uploadBefore: string) {
    this.postTitle = postTitle;
    this.uploadBefore = uploadBefore;
  }
}