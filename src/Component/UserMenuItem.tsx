import React from 'react'

const UserMenuItem:React.FC<{linkExplain:string, bgImg: string}> = (props) => {
  return (
    <a className={props.bgImg+'w-[40px] h-[40px] bg-red-500'} href='#'>{props.linkExplain}</a>
  )
}

export default UserMenuItem