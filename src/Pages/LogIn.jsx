import React, { useState } from 'react'
import './css/SignUp.css'
import background from '../images/signupback.jpg'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LonIn } from '../store/UserSlice'

const LogIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const loginhandler = (e) => {
    e.preventDefault();
    axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/login', formData)
      .then((res) => {
        if (res.data.message === 'login Success') {
          dispatch(LonIn(res.data.data))
          navigate('/')
        }else{
          alert(res.data.message)
        }
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className='signup-container'>
      <img src={background} className='background' alt="" />
      <form onSubmit={loginhandler}>

        <img src={logo} className='logo' alt="" onClick={()=>navigate('/')} />
        <div>
          <span>E-Mail :</span>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div>
          <span>Password :</span>
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <button type='sunmit'>Log In</button>
        <p>Don't have an Account? <Link to={'/signup'}>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default LogIn