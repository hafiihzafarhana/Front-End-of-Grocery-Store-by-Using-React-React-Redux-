import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

function MenuCard(props) {
  return (
    <div className={`rowMenuCard ${props.isActive == true ? "active" : ""}`}>
        <div className="imgBox">
            <img src={props.imgSrc} alt="" />
        </div>
        <h3>{props.name}</h3>
        <i className="loadMenu">
            <ChevronRightRounded/>
        </i>
    </div>
  )
}

export default MenuCard