import React from 'react'
import UserActivityListItem from './UserActivityListItem'

const UserActivityList:React.FC = () => {
  return (
    <ul className='relative bg-gray-100 flex flex-col items-center border border-gray-300 my-2'>
      <UserActivityListItem innerText={'내가 쓴 글'} bgIcon={"url('/src/public/img/my-article-icon.png')"} />
      <UserActivityListItem innerText={'댓글 단 글'} bgIcon={"url('/src/public/img/my-comment-article-icon.png')"} />
      <UserActivityListItem innerText={'내 스크랩'} bgIcon={"url('/src/public/img/my-scrap-icon.png')"} />
    </ul>
  )
}

export default UserActivityList