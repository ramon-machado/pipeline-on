import React, { Component } from 'react';
//import logo from './logo.svg';
import mba from './download.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to 2023 - 3DVPR"</h1>
        </header>
      </div>
    );
  }
}

export default App;
