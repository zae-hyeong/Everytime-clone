import React from 'react'
import UserMenuItem from './UserMenuItem'

const UserMenu:React.FC<{className: string}> = (props) => {
  return (
    <div className={props.className + ' flex items-center'}>
      <UserMenuItem linkExplain='쪽지함' bgImg='bg-account' />
      <UserMenuItem linkExplain='내 정보' bgImg='bg-chat' />
    </div>
  )
}

export default UserMenu