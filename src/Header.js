import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


function Header() {
    return (

        <Navbar className="header" expand="lg">
            <Navbar.Brand href="#home">
                <img className="headerLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="basic-navbar-nav">
                <Form className="headerSearch">
                    <FormControl type="text" placeholder="Rechercher" className="headerSearchInput mr-sm-2"/>
                    <Button className="headerSearchIcon" variant="dark"><SearchIcon/></Button>
                </Form>

                <Nav className="headerNav mr-auto">
                    <Nav.Link href="#signIn">
                        <div className="headerOption">
                            <span className="headerOptionLine1">Bonjour</span>
                            <span className="headerOptionLine2">Se connecter</span>
                        </div>
                    </Nav.Link>

                    <Nav.Link href="#orders">
                        <div className="headerOption">
                            <span className="headerOptionLine1">Retours</span>
                            <span className="headerOptionLine2">& Commandes</span>
                        </div>
                    </Nav.Link>


                    <Nav.Link href="#Prime">
                        <div className="headerOption">
                            <span className="headerOptionLine1">Votre</span>
                            <span className="headerOptionLine2">Prime</span>
                        </div>
                    </Nav.Link>

                    <Nav.Link href="#Basket">
                        <div className="headerOptionBasket" >
                            <Button variant="dark"><ShoppingBasketIcon/></Button>
                            <span className="headerOptionLine2 headerBasketCount">0</span>
                        </div>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

        // <div className="header">
        //     <img className="headerLogo" src="https://i.ibb.co/RY6wfKT/My-Amazon-logo-4.png" alt=""/>
        //
        //     <div className="headerSearch">
        //         <input type="text" className="headerSearchInput"/>
        //         <SearchIcon className="headerSearchIcon"/>
        //     </div>
        //
        //     <div className="headerNav">
        //         <div className="headerOption">
        //             <span className="headerOptionLine1">Bonjour</span>
        //             <span className="headerOptionLine2">Se connecter</span>
        //         </div>
        //
        //         <div className="headerOption">
        //             <span className="headerOptionLine1">Retours</span>
        //             <span className="headerOptionLine2">& Commandes</span>
        //         </div>
        //
        //         <div className="headerOption">
        //             <span className="headerOptionLine1">Votre</span>
        //             <span className="headerOptionLine2">Prime</span>
        //         </div>
        //
        //     </div>
        //
        // </div>

    );
};

export default Header;