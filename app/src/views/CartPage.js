import Banner from '../component/Banner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../component/MessageBox';
import { Link } from 'react-router-dom';

import "../css/CartPage.css";

function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        //delete action
    }

    const checkoutHandler = () => {
        props.history.push('./signin?redirect=shipping');
    }

    return (
        <div className="cartPage">
            <div className="PageContainer">
                <Banner />
                <h1 className="yourCart">Votre Panier</h1>
                {cartItems.length == 0 ? (
                    <MessageBox>
                        Il semblerait que votre panier soit vide, cliquez pour <Link to="/">commencer votre Shopping ! </Link>
                    </MessageBox>
                ) : (
                    <div className="cartPageContainer">
                        {cartItems.map((item) => (

                                <div className="cartContainer" key={item.product}>

                                    <div className="cartPageImageContainer">
                                        <div >
                                        <img src={item.image} alt={item.name} className="cartPageImage"></img>
                                        </div>
                                    </div>

                                    <div className="cartProductDescriptionContainer">

                                        <hdiv className="productName">
                                            <h2><Link to={`/product/${item.product}`}>{item.name}</Link></h2>
                                        </hdiv>

                                        <div>
                                            <h5 className="productCategory">{item.category}</h5>
                                        </div>
                                        <div>
                                            <h6 className="productFrom">{item.from}</h6>
                                        </div>
                                        <div className="inStockRow">
                                            <div>
                                                {item.countInStock > 0 ? (
                                                    <h6 className="text-success"> En stock</h6>
                                                ) : (
                                                    <h6 className="text-danger"> Indisponible</h6>
                                                )}
                                            </div>
                                        </div>

                                        <div>{"Quantité : "}
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>{item.price} €</div>

                                        <div>
                                            <button
                                                    className="deleteButton"
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                Supprimer
                                            </button>
                                        </div>

                                    </div>
                                    <br />
                                </div>
                        ))}
                    </div>
                )}
                <div className="text-align-center totalContainer">
                    <div className="total card card-body">
                        <div>
                            <h2>
                                Sous-total ({cartItems.reduce((a, c) => a + c.qty, 0)} articles) :
                                {" "}{cartItems.reduce((a, c) => a + c.price * c.qty, 0)} €
                            </h2>
                        </div>
                        <div className="validateCartContainer">
                            <button
                                className="validateCart" 
                                type="button"
                                onClick={checkoutHandler}
                                disabled={cartItems.length == 0}
                            >
                                Passer la commande
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CartPage;