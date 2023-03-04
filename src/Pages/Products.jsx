import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import './css/products.css'
import axios from 'axios'

const Products = ({ admin, setEdit }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [search, setSearch] = useState('')

    const fetchdata = async () => {
        const res = await axios.get('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/products');
        setProducts(res.data.data)
        if(search===''){
            setFilteredProducts(products)
        }
    }


    fetchdata();

    const filterBySearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
        let result = products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredProducts(result)
        console.log(filteredProducts)
    }

    return (
    
            
            <div className='products-container'>
        
                <div className="products">
                    {
                        filteredProducts.map((item) => (
                            <Card item={item} key={item.id} admin={admin} setEdit={setEdit} />
                        ))
                    }
                </div>
            </div>
    
    )
}

export default Products