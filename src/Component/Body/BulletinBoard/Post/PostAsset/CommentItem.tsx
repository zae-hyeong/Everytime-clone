import * as React from 'react';
import anonymousUserProfileImg from 'public/img/anonymous-user-profile.png';

export interface ICommentItemProps {
  commentId: string;
}

export default function CommentItem (props: ICommentItemProps) {
  return (
    <li key={props.commentId} className=''>
      <div>
        <img src={anonymousUserProfileImg} alt="user profile" className='w-5 h-5 rounded'/>
      </div>
    </li>
  );
}
