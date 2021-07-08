import React, {useEffect} from 'react';
import Product from "../component/Product";
import Banner from "../component/Banner";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'

import '../css/HomePage.css';
import '../css/Product.css';

import data from "../data";


function HomePage() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, []);
    return (
        <div className="homePage">
            <div className="homeContainer">
                <Banner/>
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