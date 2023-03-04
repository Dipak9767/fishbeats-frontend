import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './css/Header.css'
const Header = () => {
  const {isAuth , user} = useSelector((state)=> state.user)
  const [ active ,  setActive] = useState('home');
  return (
  <div className="header">
    <h1>logo</h1>
    <div className="links">
      <Link to={'/'} className={`link ${active==='home'?'active':''}`} onClick={()=>setActive('home')}>Home</Link>
      <Link to={'/products'} className={`link ${active==='fishes'?'active':''}`} onClick={()=>setActive('fishes')}>Fishes</Link>
      <Link to={'/contactus'} className={`link ${active==='contact'?'active':''}`} onClick={()=>setActive('contact')}>Contact US</Link>
      <Link to={'/cart'} className={`link ${active==='cart'?'active':''}`} onClick={()=>setActive('cart')}>Cart</Link>
      {
        user?.admin? <Link to={'/dashboard'} className={`link ${active==='admin'?'active':''}`} onClick={()=>setActive('admin')}>Admin</Link>:''
      }
    </div>
    {
      isAuth?
    <Link to={'/profile'} className="profile">
      <img src={user.imgUrl}alt="" />
      <span>{user.username}</span>
    </Link>:
    <Link to={'login'}>logIn</Link>
    }
  </div>
  )
}

export default Header