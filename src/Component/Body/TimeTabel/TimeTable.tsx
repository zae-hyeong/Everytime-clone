import * as React from 'react';

export interface ITimeTableProps {
}

export default function TimeTable (props: ITimeTableProps) {
  return (
    <div className='text-5xl font-bold flex justify-center items-center'>
      <p className='mt-20'>시간표 페이지입니다.</p>
    </div>
  );
}
