import React from 'react';
import Button from '@material-ui/core/Button';
import Search from './Search.js';
import Checkout from './Checkout.js';

class Display extends React.Component {
    constructor() {
            super();
            this.state = {
                mode: "search",
                productList:"treeList.json"
            };
        }

       
    render() {
      return (
            <div className="displayBox">
            {
              (this.state.mode === "search") ? 
              <Search></Search> :
              (this.state.mode === "checkout") ? 
              <Checkout></Checkout> :
              null
            }
            <h1>Hello, Display</h1>
            <Button variant="outlined" onClick={this.switchState}>Click to change Mode</Button>
        </div>

            
        );
    }

    setCheckout = () => {
    this.setState({mode:"checkout", productList:"treeList.json"});
    }

    setSearch = () => {
    this.setState({mode:"search", productList:"treeList.json"});
    }

    switchState = () => {
        if (this.state.mode === "search")
        {
            this.setCheckout();
        }
        if (this.state.mode === "checkout")
        {
            this.setSearch();
        }
    }

}

export default Display;