import React from 'react'
import UserProfileDetailButton from './UserProfileDetailButton'
import sideDummyAdBanner1 from '../../../public/img/side-dummy-ad-1.jpg'
import sideDummyAdBanner2 from '../../../public/img/side-dummy-ad-2.jpg'
import sideDummyAdBanner3 from '../../../public/img/side-dummy-ad-3.png'

const UserInfoArea:React.FC = () => {
  return (
    <section className='row-span-2'>
      <div className='bg-gray-100 h-[210px] flex flex-col items-center border border-gray-300'>
        <img src={process.env.PUBLIC_URL + '/img/user-default-img.png'} alt="user profile" />
        <span className='text-lg font-bold'>노네이머</span>
        <span className='text-gray-400 text-xs'>박재형</span>
        <span className='text-gray-400 text-xs'>asdf123</span>
        <div>
          <UserProfileDetailButton innerText={'내 정보'} />
          <UserProfileDetailButton innerText={'로그아웃'} />
        </div>
      </div>
      <ul className='relative bg-gray-100 flex flex-col items-center border border-gray-300 my-2'>
        <li><a href='#' className="before:inline-block before:bg-contain before:w-[20px] before:h-[10px] before:bg-[url('/src/public/img/my-article-icon.png')] before:bg-contain before:bg-no-repeat before:mr-3">내가 쓴 글</a></li>
        <li>내가 쓴 글</li>
        <li>내가 쓴 글</li>
      </ul>
      <div>
        <article>
          <img src={sideDummyAdBanner1} alt="side ad banner 1" />
          <img src={sideDummyAdBanner2} alt="side ad banner 2" />
          <img src={sideDummyAdBanner3} alt="side ad banner 3" />
        </article>
      </div>
    </section>
  )
}

export default UserInfoArea