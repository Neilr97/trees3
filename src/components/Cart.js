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
                  <b className="text-dark m-2"><em>{item.name}</em></b>
                  <span className="badge badge-pill m-1 badge-dark">{item.count}</span>x ${Number(item.price).toFixed(2) }
                  <button className="btn btn-danger btn-sm xs m-2"
                    onClick={ (e)=> this.props.handleDeleteItem(e, item) }>
                    <FiX />
                  </button>
                </div>
              </li>))
            }
            <b className="text-dark m-2"><em>Total: </em></b>${Number(cartItems.reduce((a, c) => (a + c.price * c.count), 0)).toFixed(2)}
            <button className="btn btn-secondary m-2" 
              onClick={ (e)=> console.log('checkout')}>Checkout
            </button>
          </ul>}
      </div>
      </label>
    )
  }
}

export default Cart;
