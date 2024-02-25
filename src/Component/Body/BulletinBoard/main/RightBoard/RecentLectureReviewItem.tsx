import React from 'react'
import starRating from "public/img/subject-rating-details-star-on.png";
import SubjectReviewSummery from 'public/class/SubjectReviewSummery'

const RecentLectureReviewItem: React.FC<{review: SubjectReviewSummery}> = (props) => {
  return (
    <li className="border px-2 py-1 hover:bg-white">
          <a href="#">
            <img
              src={starRating}
              alt="subject rating details star"
              className="w-20 mb-1"
            />
            <h4 className="text-sm">
              {props.review.subjectTitle} : {props.review.professor}
            </h4>
            <div className="flex items-center pt-1">
              <span className="text-gray-500 text-xs mr-2 overflow-hidden [display: -webkit-box;]">
                {props.review.content}
              </span>
            </div>
          </a>
        </li>
  )
}

export default RecentLectureReviewItem