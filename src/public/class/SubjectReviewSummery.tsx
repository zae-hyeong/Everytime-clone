export default class SubjectReviewSummery {
  subjectTitle: string;
  professor: string;
  content: string;

  constructor(subjectTitle: string, professor: string, content: string) {
    this.subjectTitle = subjectTitle;
    this.professor = professor;
    this.content = content;
  }
}