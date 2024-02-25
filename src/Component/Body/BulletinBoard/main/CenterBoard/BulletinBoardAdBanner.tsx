import React from 'react'
import dummyAdBannerImg from 'public/img/dummy/dummyAdImg.png';

const BulletinBoardAdBanner:React.FC = () => {
  return (
    <article>
        <img src={dummyAdBannerImg} alt="광고 이미지" className='w-full' />
      </article>
  )
}

export default BulletinBoardAdBanner