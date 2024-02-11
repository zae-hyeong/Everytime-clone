import React from 'react'
import dummyAdBannerImg from '../../../public/img/dummuAdImg.png';

const BulletinBoardAdBanner:React.FC = () => {
  return (
    <article className='bg-green-400'>
        <img src={dummyAdBannerImg} alt="광고 이미지" />
      </article>
  )
}

export default BulletinBoardAdBanner