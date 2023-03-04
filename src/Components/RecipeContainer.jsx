import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/recipecontainer.css'

const RecipeContainer = ({ recipeData }) => {


    return (
        <div className='recipe-container'>

            <h2>Recipes</h2>
            <div className="recipes">{
                recipeData ?
                    recipeData.map((item , idx) => (
                        <div className="card-container"key={idx}>

                            <img src={item.recipe.image} alt="" />

                            <div className="info">
                                <h4>{item.recipe.label}</h4>
                                <h6>{item.recipe.cuisineType} Cuisine</h6>
                                <h6>{item.recipe.mealType}</h6>
                            </div>
                         
                                <button className="buy-1"><a href={item.recipe.url}  target='_blank' > Explore Now</a></button>
                    
                        </div>
                    ))
                    : ''
            }
            </div>

        </div>
    )
}

export default RecipeContainer