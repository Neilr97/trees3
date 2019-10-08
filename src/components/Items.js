import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

class Items extends Component {
  render() {
    const displayItems = this.props.items.map(item => (
      <div className="col-md-4" key={item.id}>
        <div className="thumbnail text-center m-2">
          <a href={`#${item.id}`} onClick={ (e)=> this.props.handleAddToCart(e, item)}>
            <img src={item.imgLink} height={200} width={200} alt={item.name} />
            <p><b className="text-dark m-2">{item.name}</b></p>
          </a>
            <p><em>{item.sciencyName}</em></p>
            <b className="m-1">${Number(item.price).toFixed(2)}</b>
            <button className="btn btn-secondary m-2"
            onClick={ (e)=> this.props.handleAddToCart(e, item) }><MdAddShoppingCart /> Buy</button>
        </div>
      </div>
    ));

    return (
      <div className="row">
        {displayItems}
      </div>
    )
  }
}

export default Items;
