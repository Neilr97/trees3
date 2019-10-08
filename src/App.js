import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import Toolbar from './components/Toolbar.js';
import Display from './components/Display.js';
//testpush2

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trees Project. <br></br>Please stand by for launch.
        </p>
      </header> */}

      <div className="Container">
        <Toolbar></Toolbar>
        <Display></Display>
      </div>
    </div>
  );
}

export default App;
