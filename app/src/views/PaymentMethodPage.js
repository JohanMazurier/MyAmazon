import React, {useState} from 'react';
import Banner from '../components/Banner';
import {useDispatch, useSelector} from 'react-redux';
import {savePaymentMethod} from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodPage(props) {
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };
    return (
        <div className="paymentMethodPage">
            <div className="paymentMethodPageContainer">
                <Banner/>
                <CheckoutSteps step1 step2 step3></CheckoutSteps>
                <form className="form" onSubmit={submitHandler}>
                    <div className="paymentMethodHeaderLogoContainer">
                        <div>
                            <img className="paymentMethodHeaderLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div>
                        <h1>Moyen de paiement</h1>
                    </div>
                    <div>
                        <div className="display flex wrap">
                            <input
                                type="radio"
                                id="paypal"
                                value="PayPal"
                                name="paymentMethod"
                                required
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            ></input>
                            {" "}
                            <label htmlFor="paypal">PayPal</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                type="radio"
                                id="stripe"
                                value="Stripe"
                                name="paymentMethod"
                                required
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            ></input>
                            {" "}
                            <label htmlFor="stripe">Stripe</label>
                        </div>
                    </div>
                    <div>
                        <label/>
                        <button className="paymentMethodButton" type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}