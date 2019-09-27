import React from 'react';
import logo from "../logo.svg";
import Cart from './Cart.js';
import User from './User.js';
import './stylesheets/toolbar.css'

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="toolbar">

          <div className="toolbaricon">
            <h1>Plant a Tree</h1>
          </div>
          <div className="toolbaricon">
            <div className="logo">
              <img src={logo} alt="Logo" width={100} height={100}/>
            </div>
          </div>
          <div className="toolbaricon">
            <Cart></Cart>
          </div>
          <div className="finaltoolbaricon">
            <User></User>
          </div>

          
        </div>
      );
    }
}

export default Toolbar;