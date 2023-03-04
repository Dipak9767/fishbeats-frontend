import axios from 'axios'
import React, { useState } from 'react'
import './css/UsersList.css'

const UsersList = () => {
const [users, setUsers] = useState([])
    const fetchUsers=async()=>{
        try{
            const res  = await axios.get('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/users')
            setUsers(res.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    fetchUsers()
  return (
    <div className='users-container'>
        {
            users.map((user)=>(
                <div className="user-card">
                    <div>
                        <span>ID : </span>
                        <p>{user.id}</p>
                    </div>
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
                    <div>
                        <span>Address : </span>
                        <p>{user.address}</p>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default UsersList