import React from 'react';
//import Product from "./Product";

import '../src/css/Home.css';
import '../src/css/Product.css';

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Metro2035 from './asset/Products/Littérature/Metro2035.jpg';
import ZSJusticeLeague from './asset/Products/Blu-ray/ZSJusticeLeague.jpg';
import TLOU2 from './asset/Products/Jeux vidéo/TLOU2.jpg';
import AppleWatch from './asset/Products/High-tech/AppleWatch.jpg';
import Chromecast from './asset/Products/High-tech/Chromecast.jpg';
import ThomasPesquet from './asset/Products/Littérature/ThomasPesquet.jpg';
import MadMax from './asset/Products/Blu-ray/MadMax.jpg';
import XboxSeriesS from './asset/Products/Jeux vidéo/XboxSeriesS.jpg';
import data from "./data";


function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://i.ibb.co/D9kZzjn/Background1601x200p.png" alt=""/>

                <div className="homeRow">

                    {data.products.map(product => (
                        <div key={product._id} className="productContainer">
                            <div className="productInfo">
                                <div className="productPictureContainer">
                                    <a href={`/product/${product._id}`}>
                                        <img className="productPicture" src={product.image} alt="product"/>
                                    </a>
                                </div>
                                <a href={`/product/${product._id}`} style={{textDecoration: 'none', color: 'black'}}>
                                    <h5 className="name">{product.name}</h5>
                                </a>
                                <div className="productRating">
                                    <span>
                                        <i className="ratingStars"><StarIcon/></i>
                                    </span>
                                    <span>
                                        <i className="ratingStars"><StarIcon/></i>
                                    </span>
                                    <span>
                                        <i className="ratingStars"><StarIcon/></i>
                                    </span>
                                    <span>
                                        <i className="ratingStars"><StarIcon/></i>
                                    </span>
                                    <span>
                                        <i className="ratingStars"><StarIcon/></i>
                                    </span>
                                </div>

                                <p className="productPrice">
                                    <strong>{product.price}</strong>
                                    <small>€</small>
                                </p>
                                <div className="addToBasketContainer">
                                    <button className="addToBasket">Ajouter au Panier</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Home;