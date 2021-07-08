import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from "../component/Product";
import Banner from "../component/Banner";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";


import '../css/HomePage.css';
import '../css/Product.css';

import data from "../data";


function HomePage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true);

                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch(err){
                setError(err.message);
                setLoading(false)
            }
        };
        fetchData();
    }, [])
    return (
        <div className="homePage">
            <div className="homeContainer">
                <Banner />
                {loading ? (<LoadingBox></LoadingBox>)
                : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (
                    <div className="homeRow">
                    {products.map((product) => (
                        <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>
                    ))}
                </div>
                )}
                
            </div>
        </div>
    );
}

export default HomePage;