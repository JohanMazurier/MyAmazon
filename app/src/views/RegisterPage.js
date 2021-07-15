import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import {signin} from '../actions/userActions'
import {register} from '../actions/userActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function RegisterPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(password != confirmPassword){
            alert('Votre mot de passe et votre confirmation de mot de passe ne sont pas identiques')
        }
        else{
            dispatch(register(name, email, password));
        }
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="registerPage">
            <div className="registerContainer">
                <Banner/>
                <form className="form" onSubmit={submitHandler}>
                    <div className="registerHeaderLogoContainer">
                        <div>
                            <img className="registerHeaderLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png"
                                 alt=""/>
                        </div>
                    </div>

                    <div className="align-text-center">
                        <h1>Créer un compte</h1>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Saisissez votre nom"
                            required
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
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
                        <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
                        <input
                            type="Password"
                            id="confirmPassword"
                            placeholder="Confirmez votre mot de passe"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label/>
                        <button className="registerButton" type="submit">
                            Créer votre compte MyAmazon
                        </button>
                    </div>
                    <div className="haveAnAccount">
                        Vous possedez déjà un compte ? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Identifiez-vous</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;