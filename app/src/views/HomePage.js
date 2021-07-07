import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from "../component/Product";
import Banner from "../component/Banner"


import '../css/HomePage.css';
import '../css/Product.css';

import data from "../data";


function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        const fetchData = async () =>{
            const {data} = await axios.get('/api/products');
            setProducts(data);
        };
        fetchData();
    }, [])
    return (
        <div className="homePage">
            <div className="homeContainer">
                <Banner/>
                <div className="homeRow">
                    {products.map((product) => (
                        <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;