import React from 'react';
import '../src/css/Footer.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Footer() {
    return (
        <nav className="footerContainer">
            <div className="footerText">
                Formation CDA - Johan Mazurier - 2021
            </div>
        </nav>
    );
};

export default Footer;