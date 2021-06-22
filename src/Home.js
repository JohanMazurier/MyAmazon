import React from 'react';
import '../src/css/Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://i.ibb.co/D9kZzjn/Background1601x200p.png" alt=""/>

                <div className="homeRow">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="homeRow">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="homeRow">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

            </div>
        </div>
    );
}

export default Home;