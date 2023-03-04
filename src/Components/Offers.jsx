import React from 'react'
import crab from '../Fishes/crab.jpg'
import octopus from '../Fishes/octopus.jpg'
import prawns from '../Fishes/Prawns.jpeg'
import catfish from '../Fishes/catfish.jpg'
import salmon from '../Fishes/salmon.jpg'
import mackerel from '../Fishes/mackerel.jpg'
import tuna from '../Fishes/tuna.jpg'
import background from '../images/background.jpg'

const Offers = () => {
  return (
    <div className='home-box-2'>
    <h2 style={{ fontSize: '40px' }}>What We Offers</h2>

    <div className="types-container">
      <img src={background} alt="" className='back-img' />
      <div className="types-of-fishes">
        <div className="c1">

          <div className="info">
            <h2>
              OCTOPUS
            </h2>
            <p>Octopus is rich in many essential vitamins and minerals, making it an ideal choice for your seafood palette. Specifically, a serving of octopus is high in vitamin B12, potassium, iron, magnesium, and certain fatty acids.
            </p>
          </div>
          <img src={octopus} alt="" />
        </div>
        <div className="c1">
          <img src={catfish} alt="" />
          <div className="info">
            <h2>
              CATFISH
            </h2>
            <p>Catfish is low in Sodium, a good source of Thiamin, Potassium and Selenium, and a very good source of Protein, Vitamin D, Vitamin B12 and Phosphorus.
            </p>
          </div>

        </div>
        <div className="c1">

          <div className="info">
            <h2>
              PRAWNS
            </h2>
            <p>Eating prawns provides a complete protein, which means it includes all nine amino acids in the right proportion for the body to function properly. In fact, 100 grams of prawns contains about 25 grams of protein, approximately the same as a similar amount of chicken or beef. Prawns are extremely low in calories.
            </p>
          </div>
          <img src={prawns} alt="" />
        </div>
        <div className="c1">
          <img src={crab} alt="" />
          <div className="info">
            <h2>
              CRAB
            </h2>
            <p>Crab is packed with protein, which is important for building and maintaining muscle. Crab also contains high levels of omega-3 fatty acids, vitamin B12, and selenium. These nutrients play vital roles in improving general health while helping prevent a variety of chronic conditions.
            </p>
          </div>

        </div>
        <div className="c1">
          <div className="info">
            <h2>
              SALMON
            </h2>
            <p>Salmon is low in saturated fat and a good source of protein. It's also packed with a number of important vitamins and minerals such as zinc, phosphorus, potassium, selenium, and vitamin B. These nutrients play crucial roles in your bodily functions, such as keeping blood and nerve cells healthy and even making DNA.
            </p>
          </div>
          <img src={salmon} alt="" />
        </div>
        <div className="c1">
          <img src={mackerel} alt="" />
          <div className="info">
            <h2>
              MACKEREL
            </h2>
            <p>Mackerels are considered some of the most nutritious fishes. They're an excellent source of protein, vitamins B2, B3, B6, and B12, and vitamin D. Their flesh is also full of minerals like copper, selenium, and iodine. Some of these fishes also contain good amounts of iron and vitamin B1.
            </p>
          </div>
        </div>
        <div className="c1">
          <div className="info">
            <h2>
              TUNA
            </h2>
            <p>Tuna is especially abundant in omega 3 fatty acids. They're brilliant for the body and are thought to help lower cholesterol, boost brain function and improve eye health. It's an excellent source of vitamin B12. Tuna is rich in vitamin B12, a form of B vitamin responsible for helping the body form new red blood cells.
            </p>
          </div>
          <img src={tuna} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Offers