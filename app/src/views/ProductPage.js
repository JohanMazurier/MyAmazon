import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import Banner from '../component/Banner';
import Rating from '../component/Rating';
import "../css/ProductPage.css";

function ProductPage(props) {

    // const product = data.products.find((p) => p._id == props.match.params.id);
    // console.log(product)
    // if (!product) {
    //     return (
    //         <div>
    //             <Banner />
    //             <div>Oups, ce produit n'existe plus -_-'</div>
    //         </div>
    //     )
    // }

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div className="productPage">
            <div className="PageContainer">
                <Banner />

                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="pageRow">
                        <div className="productPageImageContainer">
                            <img src={product.image} alt={product.name} className="productPageImage" />
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
                                    <hr />
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
                                        <br />
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
                                        <br />
                                        <div>
                                            <div className="addToBasketContainer">
                                                <button className="addToBasket">
                                                    <ShoppingCartIcon />   Ajouter au Panier
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div>
    );
}

export default ProductPage;