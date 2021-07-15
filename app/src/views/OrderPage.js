import Banner from '../components/Banner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function OrderPage(props) {

    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);

    return loading ?(
        <>
        <Banner/>
        <LoadingBox></LoadingBox>
        </>
    ) : error ? (
        <>
        <Banner/>
        <MessageBox variant="danger">{error}</MessageBox>
        </>
    ) : (
        <div className="orderPage">
            <div className="orderPageContainer">
                <Banner/>
                <h1 className="yourCartDetail">Commande N° {order._id} </h1>
                <div className="cartRow">


                    <div className="orderContainer">

                        <div className="orderRecapContainer" key="">
                            <div className="ordercard card-body">
                                <h2>Adresse de livraison</h2>
                                <p>
                                    <strong>Nom:</strong> {order.shippingAddress.fullName} <br/>
                                    <strong>Adresse: </strong> {order.shippingAddress.address},
                                    {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                                    ,{order.shippingAddress.country}
                                </p>

                                {order.isDelivered ? (
                                    <MessageBox variant="success">
                                        Livraison à {order.deliveredAt}
                                    </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Non prise en charge</MessageBox>
                                )}

                            </div>
                        </div>

                        <div className="orderRecapContainer" key="">

                            <div className="ordercard card-body">
                                <h2>Paiement</h2>
                                <p>
                                    <strong>Moyen de paiement:</strong> {order.paymentMethod}
                                </p>
                                {order.isPaid ? (
                                    <MessageBox variant="success">
                                        Payé à {order.paidAt}
                                    </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Paiement non effectué</MessageBox>
                                )}
                            </div>
                        </div>

                        <div className="orderRecapContainer" key="">

                            <div className="ordercard card-body">
                                <h2>Votre panier</h2>
                                {order.orderItems.map((item) => (
                                    <div key={item.product}>
                                        <hr/>
                                        <div className="orderProductsContainer">
                                            <div className="orderImageContainer">
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
                                <div>{order.withoutTaxPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>TVA (20%) :</div>
                                <div>{order.taxPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>Total TTC :</div>
                                <div>{order.itemsPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>Frais de livraison :</div>
                                <div>{order.shippingPrice.toFixed(2)} €</div>
                            </div>

                            <div className="placeOrderTotalRow">
                                <div>
                                    <strong>Montant à régler :</strong>
                                </div>
                                <div>
                                    <strong>{order.totalPrice.toFixed(2)} €</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}