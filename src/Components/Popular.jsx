import React from 'react'
import './css/Popular.css'
import salmon from '../Fishes/salmon.jpg'
import mackerel from '../Fishes/mackerel.jpg'
import tuna from '../Fishes/tuna.jpg'
const Popular = () => {
    return (
        <div className="popular-container">
            <h2>Popular Fishes</h2>
        <div className="gallery">
            <div className="content">
                <img src={mackerel} alt="" />
                <h3>Tuna</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h6>$100.00</h6>
                <button className="buy-1">Buy Now</button>
            </div>
            <div className="content">
                <img src={tuna} alt="" />
                <h3>Mackerel</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h6>$40.00</h6>
                <button className="buy-2">Buy Now</button>
            </div>
            <div className="content">
                <img src={salmon} alt="" />
                <h3>Salmon</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h6>$70.84</h6>
                <button className="buy-3">Buy Now</button>
            </div>
        </div>
        </div>
    )
}

export default Popular