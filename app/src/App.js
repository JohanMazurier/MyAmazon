import '../src/css/App.css';
import Header from "./Header";
import HomePage from "./views/HomePage";
import ProductPage from "./views/ProductPage";
import Footer from "./Footer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Route path="/" component={HomePage} exact></Route>
                <Route path="/product/:id" component={ProductPage} ></Route>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
