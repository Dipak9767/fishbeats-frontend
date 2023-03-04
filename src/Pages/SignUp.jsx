import React, { useState } from 'react'
import './css/SignUp.css'
import background from '../images/signupback.jpg'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import uuid from 'react-uuid';
import axios from 'axios'
import { storage } from '../FireBase/firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useDispatch } from 'react-redux'
import { LonIn } from '../store/UserSlice'



const SignUp = () => {

  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    password: '',
    imgUrl: '',
    number:'',
    address:''
  })

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [imguploaded, setImguploaded] = useState(0)

  const uploadImg = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log('hi')
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setImguploaded(progress)
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, imgUrl: downloadURL })
        });
      }
    )
  }

  const signuphandler = (e) => {
    e.preventDefault();
    if(imguploaded===100){
      axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/signup', { ...formData, id: uuid() })
      .then((res) => {
        if (res.data.message === 'success') {
          dispatch(LonIn(res.data.data))
          navigate('/')
        }else{
          alert(res.data.message)
        }
      })
      .catch((e) => console.log(e))
    }
  }


  return (
    <div className='signup-container'>
      <img src={background} className='background' alt="" />
      <form onSubmit={signuphandler}>

        <img src={logo} className='logo' alt="" onClick={()=>navigate('/')}/>
        <div>
          <span>Name :</span>
          <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </div>
        <div>
          <span>E-mail :</span>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div>
          <span>Password :</span>
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>
        <div>
          <span>Number :</span>
          <input type="number" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
        </div>
        <div>
          <span>Address:</span>
          <textarea rows={5} type='text' value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
        </div>
        <div>
          <span>Photo :</span>
          <input type="file" onChange={uploadImg}  accept="image/*" className='file'/>

        </div>
        <button type='submit'>Sign Up</button>
        <p>Already have an Account? <Link to={'/login'}>Log In</Link></p>
      </form>
    </div>
  )
}

export default SignUp