import React from 'react'

function MenuContainer(props) {
  return (
    <li className={props.isHome ? 'active' : ''}>
        <a href={props.link}><span className='icon'>{props.icon}</span></a>
    </li>
  )
}

export default MenuContainer