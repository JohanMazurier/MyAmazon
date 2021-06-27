import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import '../src/css/Product.css';
import data from "./data";

function Product(props) {
    return (
        // <div className="product">
        //
        //     <div className="productInfo">
        //
        //         <a href="product.html">
        //             <h5 className="name">Metro 2035</h5>
        //         </a>
        //
        //         <div className="productRating">
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
        //             <span>
        //                 <i className="ratingStars"><StarIcon/></i>
        //             </span>
        //         </div>
        //
        //         <p className="productPrice">
        //             <strong>9.99</strong>
        //             <small>€</small>
        //         </p>
        //
        //     </div>
        //
        //     <button className="addToBasket">Ajouter au Panier</button>
        // </div>
    );
}

export default Product;