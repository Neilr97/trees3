import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Browse from './Browse.js';
import Checkout from './Checkout.js';

class Display extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'browse'
    };
  }
       
  render() {
    return (
      <div className="displayBox">
        <h3>Hello, Display</h3>
        { (this.state.mode === 'browse') ? 
            <Browse products></Browse> :
          (this.state.mode === 'checkout') ? 
            <Checkout></Checkout> :
          null
        }
          <Button variant='outlined' onClick={this.switchState}>Click to change Mode</Button>
        <h3>Display Ends</h3>
      </div>
    );
  }

  setCheckout = () => {
    this.setState( {mode: 'checkout'} );
  }

  setBrowse = () => {
    this.setState( {mode: 'browse' } );
  }

  switchState = () => {
    if (this.state.mode === 'browse') {
      this.setCheckout();
    } else if (this.state.mode === 'checkout') {
      this.setBrowse();
    }
  }
}

export default Display;
