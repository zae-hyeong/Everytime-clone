import * as React from 'react';

export interface ICampusPickProps {
}

export default function CampusPick (props: ICampusPickProps) {
  return (
    <div className='text-5xl font-bold flex justify-center items-center'>
      <p className='mt-20'>캠퍼스픽 이동 링크입니다.</p>
    </div>
  );
}
