import { AccountBalanceWallet, AccountBalanceWalletRounded, Chat, ChatRounded, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import React, { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {Items,MenuItems} from './Components/DataJSON';
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './ReactRedux/StateProvider';

function App() {

  const [mainData, setMainData] = useState(
    Items.filter(e=>e.itemID === "degan01")
  )
  
     // Dish filter function
  const setData = (itemID) => {
    setMainData(Items.filter(e=>e.itemID === itemID))
  }

  // Redux
  const [{cart},dispatch] = useStateValue()

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li")

    const cardDish = document.querySelectorAll("#root > div > main > div.mainContainer > div.dishContainer > div.rowContainer > div:nth-child(n) > div")
    // console.log(cardDish)

    // untuk menuLi
    function setMenuActive(){
      menuLi.forEach((n)=>{
        n.classList.remove("active")
        this.classList.add("active")
      })
    }

    // untuk cardDish
    function setCardDishActive(){
      cardDish.forEach((n)=>{
        n.classList.remove("active")
        this.classList.add("active")
      })
    }

    menuLi.forEach(n=>n.addEventListener("click",setMenuActive))
    cardDish.forEach(n=>n.addEventListener("click",setCardDishActive))
  }, [mainData,cart])

  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Container */}
      <main>
        <div className='mainContainer'>
          {/* Banner */}
          <div className='banner'>
            <BannerName name={"Engels"} discount={"45.000"} link={"#"}/>
            <img src="https://1.bp.blogspot.com/-XEDRc0b-Fkc/V426tTT02bI/AAAAAAAAADI/BvsqWjScaUYsjQ6bIos0Ms_PBo2qEmSjQCLcB/s1600/Import-Export-Software.png" className='deliveryPic'/>
          </div>
          {/* dishcontainer */}
          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className='rowContainer'>
              {MenuItems.map((e)=>{
                return(
                <div key={e.id} onClick={()=>setData(e.itemID)}>
                <MenuCard imgSrc={e.imgSrc} name={e.name} isActive={e.id == 1 ? true : ""}/>
              </div>)
              })}
            </div>
            <div className='dishItemContainer'>
              {
                mainData && mainData.map((e) =>{
                  return(
                      <ItemCard itemID={e.id} key={e.id} imgSrc={e.imgSrc} name={e.name} rating={e.rating} price={e.price} />
                  )
                })
              }
            </div>
          </div>
        </div>
        
        <div className='rightMenu'>
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard/>
            </div>
          </div>
        
        {!cart ? (<div></div>) : (
          <div className='cartCheckOutContainer'>
          <div className='cartContainer'>
            <SubMenuContainer name={"Cart Items"}/>
            <div className='cartItems'>
              {cart.map((e)=>{
                return(
                <CartItem
                name={e.name}
                imgSrc={e.imgSrc}
                key={e.id}
                itemID={e.id}
                price={e.price}
                />
                )
              })}
            </div>
          </div>
          <div className='totalSection'>
              <h3>Total</h3>
              <p><span>Rp 100.000</span></p>
          </div>
          <button className='checkOut'>Check Out</button>
        </div>
        )}

        </div>

      </main>
      {/* Botton Menu */}
        <div className='bottomMenu'>
          <ul id='menu'>
            <MenuContainer isHome link={"#"} icon={<HomeRounded/>}/>
            <MenuContainer link={"#"} icon={<Chat/>} />
            <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded/>} />
            <MenuContainer link={"#"} icon={<Favorite/>} />
            <MenuContainer link={"#"} icon={<SummarizeRounded/>} />
            <MenuContainer link={"#"} icon={<Settings/>} />
            <div className='indicator'></div>
          </ul>
        </div>
    </div>
  );
}

export default App;
