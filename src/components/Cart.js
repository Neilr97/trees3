import React, { Component } from 'react';
import '../App.css';
import { FiX } from 'react-icons/fi';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <label>Shopping cart:
      <div className="alert alert-success">
        {cartItems.length === 0 ? 'Empty cart' :
          <ul className="col-md-12 m-1">
            {cartItems.map(item => (
              <li key={item.id}>
                <div>
                  <b className="text-dark m-2">{item.name}</b>
                  <span className="badge badge-pill m-2 badge-dark">{item.count}</span>x ${Number(item.price).toFixed(2) }
                  <button className="btn btn-danger btn-sm xs m-2"
                    onClick={ (e)=> this.props.handleDeleteItem(e, item) }>
                    <FiX />
                  </button>
                </div>
              </li>))
            }
          </ul>
        }
      </div></label>
    )
  }
}

export default Cart;
