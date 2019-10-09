import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { FiUser, FiShoppingCart } from 'react-icons/fi';

// import Toolbar from './components/Toolbar';
import Search from './components/Search';
import Items from './components/Items';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filteredItems: [],
      cartItems: [],
      cat: '',
      price: ''
      // queryText: ''
    };
    this.handleSelectCat = this.handleSelectCat.bind(this);
    this.handleSortPrice = this.handleSortPrice.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.searchItems = this.searchItems.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <Toolbar counter={functionname}></Toolbar> */}
        <Fragment>
        <nav className="navbar sticky-top navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand mt-1" href="/">
              <div className="logo">
                <img src={logo} alt="logo" width={80} height={80} /><span>PlantATree</span>
              </div>
            </a>
            <a className="d-none d-md-inline-block">
              <FiUser className="cust-addheading m-2" onClick={ (e)=> console.log('user') } />
              <FiShoppingCart className="cust-addheading m-2" onClick={ (e)=> console.log('checkout') } />
                <span className="badge badge-pill m-2 badge-dark">
                  {this.state.cartItems.length === 0 ? '' : this.state.cartItems.length}
                </span>
            </a>
          </div>{/* container */}
        </nav>
        </Fragment>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Search 
                handleSelectCat={this.handleSelectCat}
                handleSortPrice={this.handleSortPrice}
                // searchItems={this.searchItems}
              />
              <Items 
                items={this.state.filteredItems}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
            <div className="col-md-3">
              <Cart
                cartItems={this.state.cartItems}
                handleDeleteItem={this.handleDeleteItem}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  
  UNSAFE_componentWillMount() {
    fetch("http://localhost:8000/items")  // json-server public/data.json --port 8000
      .then(response => response.json())
      .then(result => this.setState({
        items: result,
        filteredItems: result
      }));
    if (localStorage.getItem('cartItems')) {
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
  }

  sortItems() {
    this.setState(state => {
      if (state.price !== '') {
        state.items.sort((a, b) => (state.price === 'lowest')
          ? (Number(a.price) > Number(b.price) ? 1 : -1)
          : (Number(a.price) < Number(b.price) ? 1 : -1))
      } else {
        state.items.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.cat !== '') {
        return { filteredItems: state.items.filter(a => 
          a.category.indexOf(state.cat.toLowerCase()) >= 0) };
      }
      return { filteredItems: state.items };
    });
  }

  handleDeleteItem = (e, item) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  handleAddToCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let itemInCart = false;
      cartItems.forEach(ci => {
        if (ci.id === item.id) {
          item.count++;
          itemInCart = true;
        }
      });
      if (!itemInCart) {
        cartItems.push({ ...item, count: 1 });
      }
      console.log('add to cart');
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  handleSortPrice(e) {
    this.setState({ price: e.target.value });
    this.sortItems();
  }

  handleSelectCat(e) {
    this.setState({ cat: e.target.value });
    this.sortItems();
  }

  // searchItems(query) {
  //   this.setState({ queryText: query });
  //   this.sortItems();
  // }
}

export default App;
