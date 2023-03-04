import axios from 'axios'
import React, { useState } from 'react'
import './css/contactus.css'
const ContactUs = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const contactSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/contact/submit', contact)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='contactform-container'>

            <form onSubmit={(e) => contactSubmit(e)}>
                <h2>Contact Form</h2>
                <div>
                    <span>Name : </span>
                    <input type="text" value={contact.name} placeholder='name' onChange={(e) => setContact({
                        ...contact, name: e
                            .target.value
                    })} />
                </div>
                <div>
                    <span>E-Mail : </span>
                    <input type="email" value={contact.email} placeholder='E-Mail' onChange={(e) => setContact({
                        ...contact, email: e
                            .target.value
                    })} />
                </div>
                <div>
                    <span>Message : </span>
                    <textarea rows={3} type="text" value={contact.message} placeholder='Message' onChange={(e) => setContact({
                        ...contact, message: e
                            .target.value
                    })} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs