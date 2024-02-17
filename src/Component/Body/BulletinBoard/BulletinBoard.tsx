import React from 'react';
import UserInfoArea from './LeftBoard/UserInfoArea';
import RepresentativePostArea from './RightBoard/RepresentativePostArea';
import BulletinBoardAdBanner from './CenterBoard/BulletinBoardAdBanner';
import MainBoardArea from './CenterBoard/MainBoardArea';
import Footer from './Footer';

const BulletinBoard:React.FC = () => {
  return (
    <main className='grid grid-cols-bulletin-board-body grid-flow-row mx-6 gap-4'>
      <UserInfoArea />
      <BulletinBoardAdBanner />
      <RepresentativePostArea />
      <MainBoardArea />
      <Footer />
    </main>
  )
}

export default BulletinBoard