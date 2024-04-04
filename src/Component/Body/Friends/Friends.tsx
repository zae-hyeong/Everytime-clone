import * as React from 'react';

export interface IFriendsProps {
}

export default function Friends (props: IFriendsProps) {
  return (
    <div className='text-5xl font-bold flex justify-center items-center'>
      <p className='mt-20'>친구 페이지입니다.</p>
    </div>
  );
}
