import Header from "./Header";
import HomePage from "./views/HomePage";
import ProductPage from "./views/ProductPage";
import CartPage from "./views/CartPage"
import SigninPage from "./views/SigninPage"
import RegisterPage from "./views/RegisterPage"
import ShippingAddressPage from "./views/ShippingAddressPage"
import PaymentMethodPage from "./views/PaymentMethodPage"
import PlaceOrderPage from "./views/PlaceOrderPage"
import OrderPage from './views/OrderPage';
import Footer from "./Footer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <main>
                    <Route path="/" component={HomePage} exact></Route>
                    <Route path="/product/:id" component={ProductPage} ></Route>
                    <Route path="/cart/:id?" component={CartPage}></Route>
                    <Route path="/signin" component={SigninPage}></Route>
                    <Route path="/register" component={RegisterPage}></Route>
                    <Route path="/shipping" component={ShippingAddressPage}></Route>
                    <Route path="/payment" component={PaymentMethodPage}></Route>
                    <Route path="/placeorder" component={PlaceOrderPage}></Route>
                    <Route path="/order/:id" component={OrderPage}></Route>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
