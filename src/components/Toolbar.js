import React from 'react';
import logo from "../logo.svg";
import Cart from './Cart.js';
import User from './User.js';


class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="toolbar">
          <h1>Hello, Toolbar</h1>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <Cart></Cart>
            <User></User>
            <h1>Toolbar Ends</h1>
        </div>
      );
    }
}

export default Toolbar;