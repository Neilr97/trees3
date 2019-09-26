import React from 'react';
import Button from '@material-ui/core/Button';
import Browse from './Browse.js';
import Checkout from './Checkout.js';
import './stylesheets/display.css'


class Display extends React.Component {
    constructor() {
            super();
            this.state = {
                mode: "browse",
                productList:"treeList.json"
            };
        }

       
    render() {
      return (
            <div className="displayBox">
                <h1>Hello, Display</h1>
            {
              (this.state.mode === "browse") ? 
              <Browse></Browse> :
              (this.state.mode === "checkout") ? 
              <Checkout></Checkout> :
              null
            }
            
            <Button variant="outlined" onClick={this.switchState}>Click to change Mode</Button>
            <h1>Display Ends</h1>
        </div>

            
        );
    }

    setCheckout = () => {
    this.setState({mode:"checkout", productList:"treeList.json"});
    }

    setBrowse = () => {
    this.setState({mode:"browse", productList:"treeList.json"});
    }

    switchState = () => {
        if (this.state.mode === "browse")
        {
            this.setCheckout();
        }
        if (this.state.mode === "checkout")
        {
            this.setBrowse();
        }
    }

}

export default Display;