import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="headerLogo">
            <img src="/asset/MyAmazon/logo_transparent.png" alt=""/>
            <div className="headerSearch">
                <input type="text" className="headerSearchInput"/>
                {/*Logo*/}
            </div>

            <div className="headerNav">
                <div className="headerOption">
                    <span className="headerOptionLine1">Bonjour</span>
                    <span className="headerOptionLine2">Se connecter</span>
                </div>

                <div className="headerOption">
                    <span className="headerOptionLine1">Retours</span>
                    <span className="headerOptionLine2">& Commandes</span>
                </div>

                <div className="headerOption">
                    <span className="headerOptionLine1">Votre</span>
                    <span className="headerOptionLine2">Prime</span>
                </div>

            </div>

        </div>
    );
};

export default Header;