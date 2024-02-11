import React from 'react'

const UserMenuItem:React.FC<{linkExplain:string, bgImg: string}> = (props) => {
  return (
    <a className={props.bgImg+' block w-[40px] h-[40px] bg-cover text-transparent rounded-md p-1 border bg-origin-content bg-no-repeat m-1'} href='#'>{props.linkExplain}</a>
  )
}

export default UserMenuItem