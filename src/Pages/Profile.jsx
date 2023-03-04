import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOut } from '../store/UserSlice'
import './css/Profile.css'
const Profile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)

    const [message , setMessage] = useState('')

    const feedbackhandler=async()=>{
        try{
            const res = await axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/feedback/submit',{message , userId:user.id , username:user.username ,imgUrl:user.imgUrl})
            console.log(res)
        }
        catch(e){
            console.log(e)
        }
    }
    console.log(user)
    return (
        <>

            <div className="profile-container">
                <div className="upper">
                    <div className="box-1">
                        <img src={user.imgUrl} alt="" />
                        <button onClick={() => {
                            dispatch(LogOut());
                            navigate('/')
                        }}>Log Out</button>
                    </div>
                    <div className="box-2">
                        <div>
                            <span>Name : </span>
                            <p>{user.username}</p>
                        </div>
                        <div>
                            <span>Email : </span>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <span>Number : </span>
                            <p>{user.number}</p>
                        </div>
                        <div className="address">
                            <span>Address</span>
                            <p>{user.address}</p>
                        </div>
                    </div>
                </div>
                <div className="lower">
                    <div className="feedback">
                        <h4>FeedBack</h4>
                        <textarea required={true} rows={3} type="text" onChange={(e)=>setMessage(e.target.value)}/>
                        <button disabled={message.length<=0} onClick={feedbackhandler}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile