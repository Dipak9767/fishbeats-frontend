import React from 'react'
import './css/Home.css'
import homepic1 from '../images/pic7.jpg'
import Offers from '../Components/Offers'
import Popular from '../Components/Popular'
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';


const Home = () => {
  return (<>
    <div className='home-box-1'>
      <img src={homepic1} alt="" />
      <div className="text">
        <h2>Welcome</h2>
        <h4>to</h4>
        <h2>FishBeats</h2>
        <p>Delicious seafood is best exposed to a glorious flame and then celebrated with delight.</p>
      </div>
    </div>
    <Offers />
    <Popular />
    <Testimonials/>
    <Footer/>
  </>
  )
}

export default Home