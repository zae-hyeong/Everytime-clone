import * as React from 'react';
import anonymousUserProfileImg from 'public/img/anonymous-user-profile.png';
import Comment from 'public/class/Comment';
import NumOfLikes from 'Component/PublicAsset/NumOfLikes';

export interface ICommentItemProps {
  comment: Comment;
}

export default function CommentItem (props: ICommentItemProps) {
  return (
    <li key={props.comment.commentId} className='p-3 border-b first:border-t-0'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center text-xs font-bold'>
          <img src={anonymousUserProfileImg} alt="user profile" className='w-5 h-5 rounded mr-1'/>
          <span>익명</span>
        </div>
        <ul className='flex text-xs text-gray-400'>
          <li key="comment-reaction-menu-1" className='mr-2'>대댓글</li>
          <li key="comment-reaction-menu-2" className='mr-2'>공감</li>
          <li key="comment-reaction-menu-3" className='mr-2'>쪽지</li>
          <li key="comment-reaction-menu-4">신고</li>
        </ul>
      </div>
      <p>{props.comment.content}</p>
      <div className='flex items-center mt-2'>
        <span className='text-xs text-gray-400'>{props.comment.uploadTime}</span>
        {props.comment.numOfLikes ? <NumOfLikes numOfLikes={props.comment.numOfLikes} className='ml-2' /> : <></>}
      </div>
    </li>
  );
}
