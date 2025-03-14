import React, { useContext } from 'react'
import './cartitems.css'
import remove_icon from '../assets/cart_cross_icon.png'

const Cartitems = () => {
    const {all_products,CartItems,removeFromCart}=useContext(Shopcontext)
  return (
    <div className='carditems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e)=>{
        if(CartItems[e.id]>0){
          return <div>
          <div className='cartitems-format cartitems-format-main'>
            <img src={e.image} alt=""  className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{CartItems[e.id]}</button>
            <p>${e.new_price*CartItems[e.id]}</p>
            <img className='cartitems_remove_icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
          </div>
          <hr />
        </div>
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>cart totals</h1>
          <div>
            <div className='cartitems-total-items'>
              <p>subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className='cartitems-total-items'>
              <p>shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className='cartitems-total-items'>
              <h3>total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you a promocode, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='promo code'/>
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems
