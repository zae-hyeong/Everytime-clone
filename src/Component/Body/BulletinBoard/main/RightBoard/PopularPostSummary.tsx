import React from 'react'
import PopulerPostSummery from 'public/class/PostSummeryDetail'

const PopularPostSummary: React.FC<{post: PopulerPostSummery}> = (props) => {
  return (
    <li className="border px-2 py-1 hover:bg-white">
        <a href="#">
          <h4 className="text-sm">{props.post.title}</h4>
          <p className="text-gray-600 text-xs">
            {props.post.content}
          </p>
          <div className="flex items-center pt-1">
            <span className="text-gray-500 font-bold text-xs mr-2 overflow-hidden [display: -webkit-box;]">
              {props.post.board}
            </span>
            <div>
              <span
                className={
                  "text-main text-xs before:content-[]"
                }
              >
                {props.post.numOfLikes}
              </span>
              <span className="text-sub text-xs">
                {props.post.numOfComments}
              </span>
            </div>
          </div>
        </a>
      </li>
  )
}

export default PopularPostSummary