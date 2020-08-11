import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home.js";
import Shop from "./components/shop.js";
import Cart from "./components/cart.js";
import Login from "./components/login.js";
import ProductDetails from "./components/productDetails";
function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2>SHOP-STREET</h2>
            </Link>
          </div>
          <div>
            <ul className="nav-links">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-li">HOME</li>
              </Link>
              <Link to="/shop" style={{ textDecoration: "none" }}>
                <li className="nav-li">SHOP</li>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <li className="nav-li">CART</li>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li className="nav-li">LOGIN</li>
              </Link>
            </ul>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/shop/:id" exact component={ProductDetails} />
        </Switch>
        <footer className="footer">All rights reserved (not really...)</footer>
      </div>
    </Router>
  );
}

export default App;
