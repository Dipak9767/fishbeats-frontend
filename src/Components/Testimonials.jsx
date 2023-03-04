import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/Testimonials.css'

const Testimonials = () => {

    const [feedBacks, setFeedBacks] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/feedbacks')
            setFeedBacks(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='testimonial-container'>
            <h2>Our Testimonials</h2>
            <div className="testimonials">
                {
                    feedBacks ?
                        feedBacks.map((feedback) => (
                            <figure className="snip1390" key={feedback._id}>
                                <img src={feedback.imgUrl} alt="profile-sample3" className="profile" />
                                <figcaption>
                                    <h2>{feedback.username}</h2>
                                    <blockquote>{feedback.message}</blockquote>
                                </figcaption>
                            </figure>
                        ))

                        :
                        <h4>No FeedBack</h4>
                }
            </div>
        </div>
    )
}

export default Testimonials