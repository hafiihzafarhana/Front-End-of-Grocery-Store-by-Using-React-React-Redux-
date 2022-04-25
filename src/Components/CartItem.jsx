import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { actionType } from '../ReactRedux/Reducer';
import { useStateValue } from '../ReactRedux/StateProvider';
let cartItems = []

function CartItem(props) {
    // alert(props.name)
    const [qty, setQty] = useState(1);
    const [{cart},dispatch] = useStateValue()
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(props.price))
    
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
    
    useEffect(()=>{
      cartItems = cart
      setItemPrice(parseInt(qty) * parseFloat(props.price))
    },[qty])

    const updateQTY = (action, id) => {
      if(action === "add"){
        setQty(qty+1)
      }

      else{
          if(qty == 1){
            cartItems.pop(id)
            dispatch({
              type:actionType.SET_CART,
              cart:cartItems
            })
          }
          setQty(qty-1)
      }
    }

  return (
    <div className='cartItem'>
      <div className="imgBox">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">
          {props.name}
        </h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded className="itemRemove" onClick={()=>updateQTY("remove",props.itemID)} />
            <AddRounded className="itemAdd" onClick={()=>updateQTY("add",props.itemID)}/>
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">Rp </span>
        <span className="itemPriceValue">{keRupiah(itemPrice)}</span>
      </p>
    </div>
  )
}

export default CartItem