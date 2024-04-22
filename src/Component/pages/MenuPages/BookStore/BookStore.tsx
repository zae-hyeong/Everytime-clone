import * as React from 'react';

export interface IBookStoreProps {
}

export default function BookStore (props: IBookStoreProps) {
  return (
    <div className='text-5xl font-bold flex justify-center items-center'>
      <p className='mt-20'>책방 페이지입니다.</p>
    </div>
  );
}
