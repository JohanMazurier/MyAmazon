import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import '../src/css/Product.css';
import data from "./data";
import Metro2035 from "./asset/Products/Metro2035.jpg";

function Product(props) {
    return (
        <div className="productContainer">
            <div className="productInfo">
                <a href="product.html">
                    <img className="productPicture" src={Metro2035} alt="product"/>
                </a>
                <a href="product.html" style={{textDecoration: 'none', color: 'black'}}>
                    <h5 className="name">Metro 2035</h5>
                </a>
                <div className="productRating">
                    <span>
                        <i className="ratingStars"><StarIcon/></i></span>
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
                    <strong>9.99</strong>
                    <small>€</small>
                </p>
                <div className="addToBasketContainer">
                    <button className="addToBasket">Ajouter au Panier</button>
                </div>
            </div>
        </div>
    );
}

export default Product;