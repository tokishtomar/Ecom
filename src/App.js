import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import ProductsScreen from './screens/productsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceorderScreen from './screens/PlaceorderScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <button onClick={openMenu}>&#9776;</button>
                  <Link to="/">Ecom.co.in</Link>
              </div>
              <div className="header-links">
                  <a href="cart.html">Cart</a>
                  <Link to ="/signin">Sign In</Link>
              </div>
          </header>
          <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul> 
                  <li> <a href="index.html">Pants</a> </li>

                  <li> <a href="index.html">Shirts</a> </li>
              </ul>
          </aside>
          <main className="main">
              <div className="content">
                <Route path="/products" component={ProductsScreen} />
                <Route path="/placeorder" component={PlaceorderScreen} />
                <Route path="/payment" component={PaymentScreen} />
                <Route path="/shipping" component={ShippingScreen} />
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
              </div>
          </main>
          <footer className="footer">
              All right reserved.
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
