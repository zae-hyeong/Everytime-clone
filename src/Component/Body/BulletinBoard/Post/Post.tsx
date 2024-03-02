import * as React from 'react';
import PostMainContent from './PostMainContent';
import PostCommentList from './PostCommentList';

export interface IPostProps {
}

export default function Post (props: IPostProps) {
  
  return (
    <div className='w-full mt-1 border'>
      <PostMainContent />
      <PostCommentList />
    </div>
  );
}
