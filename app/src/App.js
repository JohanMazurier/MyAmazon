import Header from "./Header";
import HomePage from "./views/HomePage";
import ProductPage from "./views/ProductPage";
import CartPage from "./views/CartPage"
import SigninPage from "./views/SigninPage"
import RegisterPage from "./views/RegisterPage"
import AdminRoute from './components/AdminRoute';
import ShippingAddressPage from "./views/ShippingAddressPage"
import PaymentMethodPage from "./views/PaymentMethodPage"
import PlaceOrderPage from "./views/PlaceOrderPage"
import OrderPage from './views/OrderPage';
import OrderHistoryPage from './views/OrderHistoryPage';
import ProfilePage from './views/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import ProductListPage from './views/ProductListPage';
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
                    <Route path="/orderhistory" component={OrderHistoryPage}></Route>
                    <PrivateRoute
                        path="/profile"
                        component={ProfilePage}
                    ></PrivateRoute>
                    <AdminRoute
                        path="/productlist"
                        component={ProductListPage}
                    ></AdminRoute>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
