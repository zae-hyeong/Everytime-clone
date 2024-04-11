export default class SubjectReviewSummery {
  subjectTitle: string;
  professor: string;
  content: string;
  reviewPostId: string;

  constructor(subjectTitle: string, professor: string, content: string) {
    this.subjectTitle = subjectTitle;
    this.professor = professor;
    this.content = content;
    this.reviewPostId = Math.random().toString(36).substring(2, 11);
  }
}