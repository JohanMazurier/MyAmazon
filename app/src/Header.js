import React from 'react';
import '../src/css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


function Header() {
    return (
        <Navbar className="fixed-top header" expand="lg">
            <Navbar.Brand href="index.html">
                <img className="headerLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="basic-navbar-nav">
                <Form className="headerSearch">
                    <FormControl type="text" placeholder="Rechercher" className="headerSearchInput mr-sm-2"/>
                    <Button className="headerSearchIcon" variant="dark"><SearchIcon/></Button>
                </Form>

                <Nav className="headerNav mr-auto">
                    <Nav.Link href="signin.html">
                        <div className="headerOption">
                            <span className="headerOptionLine1">Bonjour</span>
                            <span className="headerOptionLine2">Se connecter</span>
                        </div>
                    </Nav.Link>

                    {/*<Nav.Link href="#orders">*/}
                    {/*    <div className="headerOption">*/}
                    {/*        <span className="headerOptionLine1">Retours</span>*/}
                    {/*        <span className="headerOptionLine2">& Commandes</span>*/}
                    {/*    </div>*/}
                    {/*</Nav.Link>*/}

                    <Nav.Link href="cart.html">
                        <div className="headerOptionCart" >
                            <Button className="cart" variant="dark"><ShoppingCartIcon/></Button>
                            <span className="headerOptionLine2 headerCartCount">0</span>
                        </div>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;