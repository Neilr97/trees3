import React, { Component } from 'react';
import logo from "../logo.svg";
import '../css/App.css';
import { FiMenu, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <h4><FiMenu className="menu-addheading m-2" /></h4>
            <a className="navbar-brand mt-1" href="/">
              <h2><img src={logo} height="60" width="60" alt="Logo" />
              PlantATree</h2>
            </a>
            <h5><span className="d-none d-md-inline-block">
              <FiSearch className="search-addheading m-2" />
              <FiUser className="cust-addheading m-2" />
              <FiShoppingCart className="cart-addheading m-2" />
              <span className="badge badge-pill m-2 badge-secondary">0</span>
            </span></h5>
          </div>{/* container */}
        </nav>
      </React.Fragment>
      // <div className="toolbar">
      //   <h2><div className="logo">
      //     <img src={logo} height="80" width="80" alt="Logo" />PlantATree
      //   </div></h2>
        
        
      //   <h2>Toolbar Ends</h2>
      // </div>
    );
  }
}

export default Toolbar;
