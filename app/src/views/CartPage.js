import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';

function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        props.history.push('./signin?redirect=shipping');
    }

    return (
        <div className="cartPage">
            <div className="cartContainer">
                <Banner/>
                <h1 className="yourCart">Votre Panier</h1>
                <div className="cartRow">

                    {cartItems.length == 0 ? (
                        <div className="messageBoxCartContainer">
                        <MessageBox>
                            Il semblerait que votre panier soit vide, cliquez pour <Link to="/">commencer votre Shopping
                            ! </Link>
                        </MessageBox>
                        </div>
                    ) : (
                        <div className="cartPageContainer">
                            {cartItems.map((item) => (

                                <div className="cartPageProductContainer" key={item.product}>

                                    <div className="cartPageImageContainer">
                                        <Link to={`/product/${item.product}`}><img src={item.image} alt={item.name} className="cartPageImage"></img></Link>
                                    </div>

                                    <div className="cartProductDescriptionContainer">

                                        <div>
                                            <h2><Link to={`/product/${item.product}`}
                                                      className="productName">{item.name}</Link></h2>
                                        </div>

                                        <div>
                                            <h5 className="productCategory">{item.category}</h5>
                                        </div>
                                        <div>
                                            <h6 className="productFrom">{item.from}</h6>
                                        </div>
                                        <div className="inStockRow">
                                            <div>
                                                {item.countInStock > 0 ? (
                                                    <strong className="text-success"> En stock</strong>
                                                ) : (
                                                    <strong className="text-danger"> Indisponible</strong>
                                                )}
                                            </div>
                                        </div>

                                        <div className="card card-body">
                                            <div>{"Quantit?? : "}
                                                <select
                                                    className="selectBox"
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

                                            <div>{item.price} ???</div>

                                            <hr/>

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
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="totalContainer">
                        <div className="total card card-body">
                            <div>
                                <h2 className="sousTotal">
                                    Sous-total ({cartItems.reduce((a, c) => a + c.qty, 0)} articles) :
                                    {" "}{cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)} ???
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
        </div>

    );
}

export default CartPage;