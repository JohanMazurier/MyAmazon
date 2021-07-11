import '../src/css/App.css';
import Header from "./Header";
import HomePage from "./views/HomePage";
import ProductPage from "./views/ProductPage";
import CartPage from "./views/CartPage"
import Footer from "./Footer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <main>
                <Route path="/cart/:id?" component={CartPage}></Route>
                <Route path="/" component={HomePage} exact></Route>
                <Route path="/product/:id" component={ProductPage} ></Route>
                </main> 
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
