import React from 'react'

function BannerName(props) {
  return (
    <div className='bannerContent'>
      <h3>Hello {props.name}</h3>
      <p>Get free discount for every Rp <span>{props.discount}</span> purchase</p>
      <a href={props.link}>Learn More</a>
    </div>
  )
}

export default BannerName