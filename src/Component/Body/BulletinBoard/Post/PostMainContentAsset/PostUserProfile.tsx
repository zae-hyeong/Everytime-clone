import * as React from 'react';
import defaultUserProfileImg from "public/img/anonymous-user-profile.png";

export interface IPostUserProfileProps {
}

export default function PostUserProfile (props: IPostUserProfileProps) {
  return (
    <div className='flex items-center'>
      <img src={defaultUserProfileImg} alt="user profile" className='w-10 h-10 rounded-md mr-2'/>
      <div className='flex flex-col'>
        <span className='font-bold text-sm'>익명</span>
        <span className='text-gray-400 text-xs'>02/28 20:11</span>
      </div>
    </div>
  );
}
