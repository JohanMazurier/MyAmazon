import React from 'react';
import Product from "./component/Product";


import '../src/css/Home.css';
import '../src/css/Product.css';

import data from "./data";


function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://i.ibb.co/D9kZzjn/Background1601x200p.png" alt=""/>

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

export default Home;