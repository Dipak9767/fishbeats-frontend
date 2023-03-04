import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import CartSummary from '../Components/CartSummary'
import './css/Cart.css'

const Cart = () => {

  const [cartList, setCartList] = useState([])

  const { user } = JSON.parse(localStorage.getItem('fishbeatsuser'))
  const id = user.id;
  const fetchCart = async () => {
    try {
      const res = await axios.get(`https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/cart/${id}`, id)
      setCartList(res.data.data.cartItems)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {

    fetchCart()
   
  })

  return (
    <div className='cart-container'>
      <div className="cart-items">
        {
          cartList.length > 0 ?
            cartList.map((item, idx) => (
              <CartItem key={idx} item={item} />
            ))

            : <h2 className='emptytag'>Cart is Empty</h2>
        }
      </div>
      <div className="summary-container">
        <CartSummary cartList={cartList}/>
      </div>
    </div>
  )
}

export default Cart