import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <label>Category by:
            <select className="form-control" value={this.props.cat}
            onChange={this.props.handleSelectCat}>
              <option value="">All</option>
              <option value="oak">Oak tree</option>
              <option value="elm">Elm tree</option>
              <option value="palm">Palm tree</option>
              <option value="nz-native">NZ native</option>
              <option value="soil">Soil</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>Order by:
            <select className="form-control" value={this.props.price}
            onChange={this.props.handleSortPrice}>
              <option value="">Select</option>
              <option value="lowest">Price: low to high</option>
              <option value="highest">Price: high to low</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>Search <FiSearch />
            <input className="form-control" placeholder="todo"
              // value={this.props.search}
              // onChange={this.props.searchItems}
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Search;
