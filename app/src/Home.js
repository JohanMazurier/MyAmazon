import React from 'react';
import '../src/css/Home.css';
//import Product from "./Product";
import '../src/css/Product.css';
import StarIcon from "@material-ui/icons/Star";

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://i.ibb.co/D9kZzjn/Background1601x200p.png" alt=""/>

                <div className="row center">
                    <div className="card">
                        <a href="product.html">
                            <img className="productPicture" src="/asset/Products/Metro2035.jpg" alt="product"/>
                        </a>
                    </div>
                </div>

                {/*<div className="homeRow">*/}

                {/*    <div className="product">*/}
                {/*        <div className="productInfo">*/}
                {/*            <a href="product.html">*/}
                {/*                <img className="productPicture" src="https://i.ibb.co/DknW3Zn/Metro-2035.jpg" alt=""/>*/}
                {/*            </a>*/}

                {/*            <a href="product.html">*/}
                {/*                <h5 className="name">Metro 2035</h5>*/}
                {/*            </a>*/}

                {/*            <div className="productRating">*/}
                {/*                <span>*/}
                {/*                    <i className="ratingStars"><StarIcon/></i>*/}
                {/*                </span>*/}
                {/*                <span>*/}
                {/*                    <i className="ratingStars"><StarIcon/></i>*/}
                {/*                </span>*/}
                {/*                <span>*/}
                {/*                    <i className="ratingStars"><StarIcon/></i>*/}
                {/*                </span>*/}
                {/*                <span>*/}
                {/*                    <i className="ratingStars"><StarIcon/></i>*/}
                {/*                </span>*/}
                {/*                <span>*/}
                {/*                    <i className="ratingStars"><StarIcon/></i>*/}
                {/*                </span>*/}
                {/*            </div>*/}

                {/*            <p className="productPrice">*/}
                {/*                <strong>9.99</strong>*/}
                {/*                <small>€</small>*/}
                {/*            </p>*/}

                {/*        </div>*/}
                {/*        <button className="addToBasket">Ajouter au Panier</button>*/}
                {/*    </div>*/}

                {/*</div>*/}

            </div>
        </div>
    );
}

export default Home;