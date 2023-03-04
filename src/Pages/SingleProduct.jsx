import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeContainer from '../Components/RecipeContainer';
import './css/SingleProduct.css'

const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [neutritionData, setNeutritionData] = useState({});
    const [recipeData, setRecipeDat] = useState([])

    const { user } = JSON.parse(localStorage.getItem('fishbeatsuser'))

    const addToCart = async () => {

        const cartItem = {
            productId: product.id,
            quantity: 1,
            name: product.name,
            price: product.price,
            imgUrl: product.imgUrl
        }

        try {

            let flag = true
            const response = await axios.get(`https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/cart/${user.id}`)

            if (response.data.data !== null) {
                response.data.data.cartItems.forEach((element) => {
                    if (element.productId === product.id) {
                        flag = false
                    }
                })
            }
            if (flag) {
                const res = await axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/addtocart', { userid: user.id, cartItems: cartItem })
                alert('Added To Cart')
            }
            else {
                alert('Already Added')
            }
        } catch (e) {
            console.log(e)
        }
    }
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/product/${id}`)
            setProduct(res.data.data)

            const neutrientName = res.data.data.name
            const options = {
                method: 'GET',
                url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
                params: { query: neutrientName },
                headers: {
                    'X-RapidAPI-Key': 'cafc060a86msh6b871b400158f38p1e98d4jsndd58402eeaac',
                    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
                }
            };

            const response = await axios.request(options);
            setNeutritionData(response.data[0])
          
            const recipeRes = await axios.get(`https://api.edamam.com/search?q=${res.data.data.name}&app_id=04389291&app_key=68524780c68d68b1fa1858adfc598273`)
            setRecipeDat(recipeRes.data.hits)
            console.log(recipeRes.data.hits)

        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <div className='singleProduct-container'>
            <div className="product-info">
                <img src={product.imgUrl} alt="" />
                <div className="right-container">
                    <div className="info">
                        <h2>{product.name}</h2>
                        <p>{product.desc}</p>
                        <h4>${product.price} kg</h4>
                    </div>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="line"></div>
            <div className="neutrition-container">
                <h2>Neutritions</h2>
                <div className="neutritions">
                    <div>
                        <p>Serving size</p>
                        <span>{neutritionData.serving_size_g} g</span>
                    </div>
                    <div>
                        <p>Calories</p>
                        <span>{neutritionData.calories}</span>
                    </div>
                    <div>
                        <p>Protein</p>
                        <span>{neutritionData.protein_g} g</span>
                    </div>
                    <div>
                        <p>sugar</p>
                        <span>{neutritionData.sugar_g} g</span>
                    </div>
                    <div>
                        <p>Cholesterol</p>
                        <span>{neutritionData.cholesterol_mg} mg</span>
                    </div>
                    <div>
                        <p>Fat</p>
                        <span>{neutritionData.fat_total_g} g</span>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            {
                recipeData?<RecipeContainer recipeData={recipeData}/>:''
            }
        </div>
    )
}

export default SingleProduct