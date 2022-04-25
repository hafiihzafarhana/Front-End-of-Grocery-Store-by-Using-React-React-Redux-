import React, { useEffect } from 'react'
import { BarChart, SearchRounded, ShoppingCartRounded, ToggleOnRounded } from '@mui/icons-material'
export default function Header() {

  useEffect(()=>{
    // const toggleMenu = document.querySelector(".toggleMenu")
    // toggleMenu.addEventListener("click",()=>{
    //   document.querySelector(".rightMenu").classList.toggle("active")
    // })

    document.querySelector(".toggleMenu").onclick = function(){myFunc()}
    function myFunc(){
      document.querySelector(".rightMenu").classList.toggle("active")
    }
  },[])

  return (
    <header>
      <img src="https://clipground.com/images/coconut-logo-png-12.png" className='logo' alt="" />
      <div className="inputBox">
        <SearchRounded className='searchIcon'/>
        <input type="text" placeholder='Search'/>
      </div>
      <div className="shopingCart">
        <ShoppingCartRounded className='cart'/>
        <div className="cart_content">
          <p>2 </p>
        </div>
      </div>
      <div className="profileContainer">
          <div className="imgBox">
            <img src="https://i.pinimg.com/originals/03/e5/1c/03e51cacd4d579b612b10dfa6c9ee228.jpg" className='profilePic' alt="" />
          </div>
          <h2 className="username">Engels</h2>
        </div>
      <div className="toggleMenu">
        <BarChart className='toggleIcon'/>
      </div>
    </header>
  )
}
