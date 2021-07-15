import React, {useState} from 'react';
import Banner from '../components/Banner';
import {useDispatch, useSelector} from 'react-redux';
import {saveShippingAddress} from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressPage(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    if (!userInfo) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({fullName, address, city, postalCode, country})
        );
        props.history.push('/payment');
    };
    return (
        <div className="shippingAddressPage">
            <div className="shippingAddressContainer">
                <Banner/>
                <CheckoutSteps step1 step2></CheckoutSteps>
                <form className="form" onSubmit={submitHandler}>
                    <div className="shippingAddressHeaderLogoContainer">
                        <div>
                            <img className="shippingAddressHeaderLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div>
                        <h1>Adresse de livraison</h1>
                    </div>
                    <div>
                        <label htmlFor="fullName">Nom Complet</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Saisissez votre nom complet"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="address">Adresse de livraison</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Saisissez l'adresse de livraison"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="city">Ville</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Saisissez la ville"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="postalCode">Code postal</label>
                        <input
                            type="text"
                            id="postalCode"
                            placeholder="Saisissez le Code postal"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="country">Pays</label>
                        <input
                            type="text"
                            id="country"
                            placeholder="Entrez le pays"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label/>
                        <button className="shippingAddressButton" type="submit">
                            Etape suivante
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}