import Banner from '../components/Banner';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {detailsUser, updateUserProfile} from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstants';


function ProfilePage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;


    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) {
            dispatch({type: USER_UPDATE_PROFILE_RESET});
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        if (password !== confirmPassword) {
            alert('Password and Confirm Password Are Not Matched');
        } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }));
        }
    };

    return (
        <div className="profilePage">
            <div className="profilePageContainer">
                <Banner/>
                <div>
                    <form className="form" onSubmit={submitHandler}>
                        <div className="profileHeaderLogoContainer">
                            <div>
                                <img className="profileHeaderLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png"
                                     alt=""/>
                            </div>
                        </div>
                        <div>
                            <h1>Votre Profil</h1>
                        </div>
                        {loading ? (
                            <LoadingBox></LoadingBox>
                        ) : error ? (
                            <MessageBox variant="danger">{error}</MessageBox>
                        ) : (
                            <>
                                {loadingUpdate && <LoadingBox></LoadingBox>}
                                {errorUpdate && (
                                    <MessageBox variant="danger">{errorUpdate}</MessageBox>
                                )}
                                {successUpdate && (
                                    <MessageBox variant="success">
                                        Profile Updated Successfully
                                    </MessageBox>
                                )}
                                <div>
                                    <label htmlFor="name">Nom</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Saisissez votre nom"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="email">Votre adresse e-mail</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Saisissez votre adresse e-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="password">Saisissez votre mot de passe</label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Saisissez votre mot de passe"
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirmez votre adresse mot de passe</label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirmer votre mot de passe"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    ></input>
                                </div>
                                <div>
                                    <label/>
                                    <button className="profileButton" type="submit">
                                        Mettre à jour vos informations
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ProfilePage;