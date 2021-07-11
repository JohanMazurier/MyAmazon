import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <div className="productPage">
            <div className="PageContainer">
                <Banner />

                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="productPageContainer">
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
                                        <h4 className="productCategory">{product.category}</h4>
                                    </div>
                                    <div>
                                        <h6 className="productFrom">{product.from}</h6>
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
                                            <div className="inStockRow">
                                                <div>Status :
                                                    {product.countInStock > 0 ? (
                                                        <strong className="text-success"> En stock</strong>
                                                    ) : (
                                                        <strong className="text-danger"> Indisponible</strong>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {product.countInStock > 0 && (
                                            <div>
                                                <div>
                                                    {"Quantité : "}
                                                    <select
                                                        className="selectBox"
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>

                                                <div className="addToBasketContainer">
                                                    <button onClick={addToCartHandler} className="addToBasket">
                                                        <ShoppingCartIcon />   Ajouter au Panier
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        </div >
    );
}

export default ProductPage;