import React from 'react';
import UserInfoArea from './UserInfoArea';
import RepresentativePostArea from './RepresentativePostArea';
import BulletinBoardAdBanner from './BulletinBoardAdBanner';
import MainBoardArea from './MainBoardArea';

const BulletinBoard:React.FC = () => {
  return (
    <main className='grid grid-cols-bulletin-board-body grid-flow-row mx-6 gap-4'>
      <UserInfoArea />
      <BulletinBoardAdBanner />
      <RepresentativePostArea />
      <MainBoardArea />
    </main>
  )
}

export default BulletinBoard