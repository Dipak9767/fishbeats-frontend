import axios from 'axios'
import React from 'react'
import './css/CartItem.css'

const CartItem = ({ item}) => {

    const { user } = JSON.parse(localStorage.getItem('fishbeatsuser'))

    const quantityHandler = async (type) => {
       
        try {
            const data = await axios.put('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/cart/quantity', { productid: item.productId, userid: user.id, type })
        }
        catch (e) {
            console.log(e)
        }

    }
    return (<>
        <div className='item-container'>
            <img src={item.imgUrl} alt="" />
            <div className="cartItem-info">
                <h3>{item.name}</h3>
                <h5>${item.price} kg</h5>
                <button onClick={() => quantityHandler('delete')}>Remove</button>
            </div>
            <div className="quantity">
                <button onClick={() => quantityHandler('decreament')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => quantityHandler('increament')}>+</button>
            </div>
        </div>
        <div className='line'></div>
    </>
    )
}

export default CartItem