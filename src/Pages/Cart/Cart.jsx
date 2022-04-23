import React from 'react'
import EmptyCart from '../../components/Cart/EmptyCart'

import './Cart.css';

const Cart = () => {
  window.scroll(0,0)
  return (
      <div className="cart">
          <EmptyCart/>
      </div>
  )
}

export default Cart