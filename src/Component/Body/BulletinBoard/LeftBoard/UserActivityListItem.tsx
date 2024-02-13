import React from 'react'

const UserActivityListItem:React.FC<{innerText: string, bgIcon: string}> = (props) => {
  return (
    <li><a href='#' className={`before:bg-[${props.bgIcon}]` + ' before:inline-block before:bg-contain before:w-[20px] before:h-[10px] before:bg-contain before:bg-no-repeat before:mr-3'}>{props.innerText}</a></li>
  )
}

export default UserActivityListItem