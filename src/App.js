import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar.js';
import Display from './components/Display.js';
//testpush2

function App() {
  return (
    <div className="App">
      <div className="AppContainer" style={{margin:'0px'}}>
        <Toolbar></Toolbar>
        <br></br>
        <Display></Display>
      </div>
    </div>
  );
}

export default App;
