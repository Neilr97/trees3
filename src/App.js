import React from 'react';
import logo from './logo.svg';
import Search from './components/Search';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trees Project. <br></br>Please stand by for launch.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test! Test! Test!
        </a>
      </header>
    </div>
  );
  /*Render for Search Component*/
  /*constructor(props){
    super(props);
    let arrayLevel = [];
    if (Items.length > 0) {
      for (let i = 0; i < Items.length; i++) {
        if (arrayLevel.indexOf(Items[i].level) === -1) {
          arrayLevel.push(Items[i].level);
        }
      }
    }
    arrayLevel.sort(function (a, b) { return a - b });
    this.state = {
      items: Items,
      showAlert: false,
      titleAlert: '',
      idAlert: '',
      indexEdit: 0,
      idEdit: '',
      nameEdit: '',
      levelEdit: 0,
      arrayLevel: arrayLevel,
      showForm: false,
      valueItem: '',
      sortType: '',
      sortOrder: '',
      valueSearch: ''
    }
  }
  render(){
    return (
      <div className="container">
        <SweetAlert
          showCancelButton
          show={this.state.showAlert}
          title="Delete Item?"
          text={this.state.titleAlert}
          onOutsideClick={() => this.setState({ showAlert: false })}
          onEscapeKey={() => this.setState({ showAlert: false })}
          onCancel={() => this.setState({ showAlert: false })}
          onConfirm={() => this.handleDeleteItem()}
        />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search
              valueSearch={this.state.valueSearch}
              handleSearch={this.handleSearch}
            />
          </div>
        </div>
      </div>
    );
  }
  handleSearch = (search) => {
    let sourceArray = Items;
    let newArray = [];
    if (search.length <= 0) {
      newArray = sourceArray;
    } else {
      search.toLowerCase();
      for (let item of sourceArray) {
        if (item.name.toLowerCase().indexOf(search) > -1) {
          newArray.push(item);
        }
      }
    }
    this.setState({
      items: newArray,
      valueSearch: search
    });
  }*/
}



export default App;

