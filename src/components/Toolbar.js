import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { FiUser, FiShoppingCart } from 'react-icons/fi';

// how would i get cartItems.length from App.js?

class Toolbar extends Component {
  render() {
    return (
      <Fragment>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand mt-1" href="/">
            <div className="logo">
              <img src={logo} alt="logo" width={80} height={80} /><span>PlantATree</span>
            </div>
          </a>
          <a className="d-none d-md-inline-block">
            <FiUser className="cust-addheading m-2" />
            <FiShoppingCart className="cust-addheading m-2" />
              <span className="badge badge-pill m-2 badge-dark">
                {this.state.cartItems.length === 0 ? '' : this.state.cartItems.length}
              </span>
          </a>
        </div>{/* container */}
      </nav>
      </Fragment>
    )
  }
}

export default Toolbar;
