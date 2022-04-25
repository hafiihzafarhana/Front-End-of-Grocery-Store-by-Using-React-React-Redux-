import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { actionType } from '../ReactRedux/Reducer'
import { useStateValue } from '../ReactRedux/StateProvider'
import { Items } from './DataJSON'
let cartData = []

function ItemCard(props) {
  const [isFavourite, setIsFavourite] = useState(false)
  const [currentValue, setCurrentValue] = useState(Math.floor(0))
  const handleClick = (i) => {
    setCurrentValue(i)
  }

  const [isCart,setCart] = useState(null)
  // useStatValue() dari file StateProvider
  const [{},dispatch] = useStateValue()

  function keRupiah(data){
    var	number_string = data.toString()
    var  sisa 	= number_string.length % 3
    var  rupiah 	= number_string.substr(0, sisa)
    var  ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
        
    if (ribuan) {
    var  separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
    }

    return rupiah
  }

  useEffect(() => {
    if(isCart){
      cartData.push(isCart)
      dispatch({
        type:actionType.SET_CART,
        cart:cartData
      })
    }
  }, [isCart])
  
  return (
    <div className='itemCard' id={props.itemID}>
        <div className={`isFavourite ${isFavourite ? "active" : "" }`} onClick={()=>{
          setIsFavourite(!isFavourite)
        }}>
          <Favorite/>
        </div>

        <div className="imgBox">
          <img src={props.imgSrc} alt="" className='itemImg' />
        </div>

        <div className="itemContent">
          <h3 className='itemName'>{props.name}</h3>
          <div className="bottom">
            <div className="ratings">
              {Array.apply(1,{length:5}).map((e,i)=>{
                return (
                  <i key={i} className={`rating ${currentValue > i ? "orange" :"gray"}`} onClick={()=>handleClick(i+1)}><StarRounded/></i>
                )
              })}
              <h3 className="price"><span>Rp </span>{keRupiah(props.price)}</h3>
            </div>
            <i className="addToCart" onClick={()=> setCart(Items.find(e=>e.id == props.itemID))}>
              <AddRounded/>
            </i>
          </div>
        </div>

    </div>
  )
}

export default ItemCard