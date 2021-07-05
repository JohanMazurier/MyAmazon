import React from 'react';
import Product from "../component/Product";
import Banner from "../component/Banner"


import '../css/HomePage.css';
import '../css/Product.css';

import data from "../data";


function HomePage() {
    return (
        <div className="homePage">
            <div className="homeContainer">
                <Banner/>
                <div className="homeRow">
                    {data.products.map((product) => (
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