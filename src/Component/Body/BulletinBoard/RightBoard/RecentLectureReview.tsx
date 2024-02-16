import React from "react";
import SubjectReviewSummery from "../../../../public/class/SubjectReviewSummery";
import RecentLectureReviewItem from "./RecentLectureReviewItem";

const RecentLectureReview: React.FC<{
  postsTitle: string;
  postContent: SubjectReviewSummery[];
}> = (props) => {
  return (
    <ul className="border mb-1 bg-gray-100">
      <li>
        <a href="#">
          <h3 className="text-sub p-2 font-bold border">{props.postsTitle}</h3>
        </a>
      </li>
      {props.postContent.map((review) => (
        <RecentLectureReviewItem review={review}/>
      ))}
    </ul>
  );
};

export default RecentLectureReview;
