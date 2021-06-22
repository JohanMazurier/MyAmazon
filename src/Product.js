import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import '../src/css/Product.css';

function Product(props) {
    return (
        <div className="product">
            <div className="productInfo">

                <img className="productPicture" src="https://i.ibb.co/DknW3Zn/Metro-2035.jpg" alt=""/>

                <a href="product.html">
                    <h5 className="title">Metro 2035</h5>
                </a>

                <div className="productRating">
                    <span>
                        <i className="ratingStars"><StarRateIcon/></i>
                    </span>
                    <span>
                        <i className="ratingStars"><StarRateIcon/></i>
                    </span>
                    <span>
                        <i className="ratingStars"><StarRateIcon/></i>
                    </span>
                    <span>
                        <i className="ratingStars"><StarRateIcon/></i>
                    </span>
                    <span>
                        <i className="ratingStars"><StarRateIcon/></i>
                    </span>
                </div>

                <p className="productPrice">
                    <strong>9.99</strong>
                    <small>€</small>
                </p>

            </div>


            <button className="addToBasket">Ajouter au Panier</button>
        </div>
    );
}

export default Product;