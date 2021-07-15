import React from 'react';
import Banner from '../components/Banner';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.TTCPrice = cart.itemsPrice
    cart.HTPrice = toPrice(0.80 * cart.itemsPrice)
    cart.TVA = toPrice(cart.itemsPrice - cart.HTPrice)
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(5);
    cart.totalPrice = toPrice(cart.itemsPrice + cart.shippingPrice)
    // cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    // cart.HTPrice = toPrice(0.80 * cart.itemsPrice);
    // cart.TVA = toPrice(1.20 * cart.HTPrice)
    // cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const placeOrderHandler = () => {
        // TODO: dispatch place order action
    };
    return (

        <div className="placeOrderPage">
            <div className="placeOrderPageContainer">
                <Banner/>
                <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
                <h1 className="yourCartDetail">Récapitulatif de votre commande</h1>
                <div className="cartRow">


                    <div className="placeOrderContainer">

                        <div className="placeOrderRecapContainer" key="">
                            <div className="placeOrdercard card-body">
                                <h2>Adresse de livraison</h2>
                                <p>
                                    <strong>Nom:</strong> {cart.shippingAddress.fullName} <br/>
                                    <strong>Adresse: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                                    ,{cart.shippingAddress.country}
                                </p>
                            </div>
                        </div>

                        <div className="placeOrderRecapContainer" key="">

                            <div className="placeOrdercard card-body">
                                <h2>Paiement</h2>
                                <p>
                                    <strong>Moyen de paiement:</strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </div>

                        <div className="placeOrderRecapContainer" key="">

                            <div className="placeOrdercard card-body">
                                <h2>Votre panier</h2>
                                {cart.cartItems.map((item) => (
                                    <div key={item.product}>
                                        <hr/>
                                        <div className="placeOrderProductsContainer">
                                            <div className="placeOrderImageContainer">
                                                <Link to={`/product/`}><img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="placeOrderImage"></img></Link>
                                            </div>

                                            <div className="card productDetail">
                                                <div className="productRow">
                                                    <Link to={`/product/${item.product}`} className="ProductName">
                                                        {item.name}
                                                    </Link>
                                                </div>

                                                <div className="productRow">
                                                    {item.qty} x {item.price} € = {item.qty * item.price} €
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>

                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="totalContainer">
                        <div className="orderTotalAmount card card-body">
                            <div>
                                <h2>Montant de votre commande</h2>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>Montant total HT :</div>
                                <div>{cart.HTPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>TVA :</div>
                                <div>{cart.TVA.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>Total TTC :</div>
                                <div>{cart.TTCPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>Frais de livraison :</div>
                                <div>{cart.shippingPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>
                                    <strong>Montant à régler :</strong>
                                </div>
                                <div>
                                    <strong>{cart.totalPrice.toFixed(2)} €</strong>
                                </div>
                            </div>

                            <div className="validateCartContainer">
                                <button
                                    className="validateCart"
                                    type="button"
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