import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header() {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <Navbar className="fixed-top header" expand="lg">
            <Link to="/">
                <img className="headerLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png" alt=""/>
            </Link>
            <Navbar.Toggle className="burgerButton" aria-controls="basic-navbar-nav-reverse"/>
            <Navbar.Collapse className="basic-navbar-nav">
                <Form className="headerSearch">
                    <FormControl type="text" placeholder="Rechercher" className="headerSearchInput mr-sm-2"/>
                    <Button className="headerSearchIcon" variant="dark"><SearchIcon/></Button>
                </Form>

                <Nav className="headerNav mr-auto">
                    <Link className="headerOptionContainer" to="/signin">
                        <div className="headerOption">
                            <span className="headerOptionLine1">Bonjour</span>
                            <span className="headerOptionLine2">Se connecter</span>
                        </div>
                    </Link>

                    {/*<Nav.Link href="#orders">*/}
                    {/*    <div className="headerOption">*/}
                    {/*        <span className="headerOptionLine1">Retours</span>*/}
                    {/*        <span className="headerOptionLine2">& Commandes</span>*/}
                    {/*    </div>*/}
                    {/*</Nav.Link>*/}

                    <Link to="/cart">
                        <div className="headerOptionCart text" >
                            <Button className="cart" variant="dark"><ShoppingCartIcon/>
                            <span className="headerOptionLine2 headerCartCount text-decoration-none">{cartItems.length}</span>
                            </Button>
                        </div>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;