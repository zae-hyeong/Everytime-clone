import React from 'react'

const NavigationItem: React.FC<{title: string}> = (props) => {
  return (
    <li>{props.title}</li>
  )
}

export default NavigationItem