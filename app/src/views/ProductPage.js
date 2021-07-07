import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import data from '../data'
import Banner from '../component/Banner';
import Rating from '../component/Rating';
import "../css/ProductPage.css";

function ProductPage(props) {
    const product = data.products.find((p) => p._id == props.match.params.id);
    console.log(product)
    if (!product) {
        return (
            <div>
                <Banner/>
                <div>Oups, ce produit n'existe plus -_-'</div>
            </div>
        )
    }
    return (
        <div className="productPage">
            <div className="PageContainer">
                <Banner/>

                <div className="pageRow">
                    <div className="productPageImageContainer">
                        <img src={product.image} alt={product.name} className="productPageImage"/>
                    </div>
                        <div className="productDescriptionStatusContainer">
                            <div className="productDescriptionContainer">
                                <div>
                                    <div>
                                        <h1>{product.name}</h1>
                                    </div>
                                    <div>
                                        <Rating
                                            rating={product.rating}
                                            numReviews={product.numReviews}
                                        />
                                    </div>
                                    <hr/>
                                    <div>Prix :
                                        <strong> {product.price}</strong><small>€</small>
                                    </div>
                                    <div>Description :
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                                <div className="productStatusContainer">
                                    <div className="card card-body">
                                        <div>
                                            <div>
                                                <div className="row">
                                                    <div>
                                                        Prix :<strong> {product.price}</strong><small>€</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div>
                                                <div className="row">
                                                    <div>Status :
                                                        {product.countInStock > 0 ? (
                                                            <strong className="text-success"> En stock</strong>
                                                        ) : (
                                                            <strong className="text-danger"> Indisponible</strong>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div>
                                                <div className="addToBasketContainer">
                                                        <button className="addToBasket">
                                                            <ShoppingCartIcon/>   Ajouter au Panier
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>

            </div>
        </div>
    );
}

export default ProductPage;