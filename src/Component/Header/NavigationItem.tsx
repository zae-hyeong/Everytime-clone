import React from 'react'

const NavigationItem: React.FC<{title: string}> = (props) => {
  return (
    <li className='text-lg bold leading-5 mx-[12px]'>{props.title}</li>
  )
}

export default NavigationItem