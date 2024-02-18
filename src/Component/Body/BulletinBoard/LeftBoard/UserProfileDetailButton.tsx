import React from 'react'

const UserProfileDetailButton: React.FC<{innerText: string}> = (props) => {
  return (
    <a href="#" className='odd:mr-1 border text-gray-500 text-sm px-2 py-1 rounded border-gray-300'>{props.innerText}</a>
  )
}

export default UserProfileDetailButton