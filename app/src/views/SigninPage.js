import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import {signin} from '../actions/userActions'
import {register} from '../actions/userActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SigninPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="signinPage">
            <div className="signinContainer">
                <Banner/>
                <form className="form" onSubmit={submitHandler}>
                    <div className="signinHeaderLogoContainer">
                        <div>
                            <img className="signinHeaderLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png"
                                 alt=""/>
                        </div>
                    </div>

                    <div className="align-text-center">
                        <h1>S'identifier</h1>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <div>
                        <label htmlFor="email">Votre adresse e-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Saisissez votre adresse e-mail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Votre mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Saisissez votre mot de passe"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label/>
                        <button className="signinButton" type="submit">
                            S'identifier
                        </button>
                    </div>
                    <div className="newOnMyAmazon">
                        Nouveau chez MyAmazon ? {' '}
                        <Link
                            to={`/register?redirect=${redirect}`}>Créer votre compte MyAmazon</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SigninPage;