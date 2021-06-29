import React from 'react';
import Rating from "./Rating";

import '../css/Product.css';
import data from "../data";

function Product(props) {

    const {product} = props;

    return (

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

                <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                />

                <p className="productPrice">
                    <strong>{product.price}</strong>
                    <small>€</small>
                </p>
                <div className="addToBasketContainer">
                    <button className="addToBasket">Ajouter au Panier</button>
                </div>
            </div>
        </div>

        // <div className="productContainer">
        //     <div className="productInfo">
        //         <a href="product.html">
        //             <img className="productPicture" src={Metro2035} alt="product"/>
        //         </a>
        //         <a href="product.html" style={{textDecoration: 'none', color: 'black'}}>
        //             <h5 className="name">Metro 2035</h5>
        //         </a>
        //         <div className="productRating">
        //             <span>
        //                 <i className="ratingStars"><StarIcon/></i></span>
        //             <span>
        //                 <i className="ratingStars"><StarIcon/></i>
        //             </span>
        //             <span>
        //                 <i className="ratingStars"><StarIcon/></i>
        //             </span>
        //             <span>
        //                 <i className="ratingStars"><StarIcon/></i>
        //             </span>
        //             <span>
        //                 <i className="ratingStars"><StarIcon/></i>
        //             </span>
        //         </div>
        //
        //         <p className="productPrice">
        //             <strong>9.99</strong>
        //             <small>€</small>
        //         </p>
        //         <div className="addToBasketContainer">
        //             <button className="addToBasket">Ajouter au Panier</button>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Product;