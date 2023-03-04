import React, { useEffect, useState } from 'react'
import './css/cartsummary.css'

const CartSummary = ({ cartList }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let sum = 0;
        if (cartList.length > 0) {
            cartList.forEach(element => {
                sum = sum + element.price * element.quantity
            });
            setTotal(sum)
        }else{
            setTotal(0)
        }
    })

    return (
        <div className='summary'>
            <h1>Cart Summary</h1>
            <h3>Total Items : {cartList.length}</h3>
            <h3>Total Price : {total}</h3>
            <button>Place Order</button>
        </div>
    )
}

export default CartSummary