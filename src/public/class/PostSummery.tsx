export default class PostSummery {
  postTitle: string;
  uploadBefore: string;
  postId: string;

  constructor(postTitle: string, uploadBefore: string) {
    this.postTitle = postTitle;
    this.uploadBefore = uploadBefore;
    this.postId = Math.random().toString(36).substring(2, 11);
  }
}