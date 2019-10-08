import React, { Component } from 'react';

class Browse extends Component {

  constructor() {
    super();
    this.state = {
      storeProducts: []
    };
  }
    
  componentDidMount() {
    fetch('/treeList.json')
      .then(response => response.json())
      .then(result => {
        const prod = result.map(item => {
          return item;
        })
        this.setState({
          storeProducts: prod
        });
      });
  }

  render() {
    const displayProducts = this.state.storeProducts.map(item => (
      <div key = {item.ID}>
        <h5>Name: {item.itemName}</h5>
        <img src={item.imgLink} height="300" width="300" alt="Product" />
        <p>Category: {item.category}</p>
      </div>
    ));

    return (
      <div className="container">
        {displayProducts}
      </div>
    );
  }
}

export default Browse;
