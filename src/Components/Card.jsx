import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/card.css'

const Card = ({ item, admin, setEdit }) => {

  const { user } = JSON.parse(localStorage.getItem('fishbeatsuser'))

  const userId = user.id
  const addToCart = async () => {

    const cartItem = {
      productId: item.id,
      quantity: 1,
      name: item.name,
      price: item.price,
      imgUrl: item.imgUrl
    }

    try {

      let flag = true
      const response = await axios.get(`https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/cart/${user.id}`)

      if (response.data.data !== null) {
        response.data.data.cartItems.forEach((element) => {
          if (element.productId === item.id) {
            flag = false
          }
        })
      }
      if (flag) {
        const res = await axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/addtocart', { userid: user.id, cartItems: cartItem })
        alert('Added To Cart')
      }
      else {
        alert('Already Added')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const deleteProduct = async () => {
    try {
      const res = await axios.put(`https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/deleteproduct/${item._id}`, {userId,id:item.id})
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="card-container">

      {
        admin ? <div className="edit-delete">
          <button id='edit' onClick={() => setEdit(item, true)}>Edit</button>
          <button id='delete' onClick={deleteProduct}>Delete</button>
        </div> : ''
      }
      <Link to={`/product/${item.id}`}>
        <img src={item.imgUrl} alt="" />
      </Link>
      <h3>{item.name}</h3>
      <h6>${item.price} kg</h6>
      <button className="buy-1" onClick={addToCart}>Buy Now</button>
    </div>
  )
}

export default Card