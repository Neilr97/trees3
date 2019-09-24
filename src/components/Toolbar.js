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
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h1>Hello, Toolbar</h1>
            <Cart></Cart>
            <User></User>
        </div>
      );
    }
}

export default Toolbar;