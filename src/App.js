import React, { Component } from 'react';
//import logo from './logo.svg';
import mba from './OctoCat.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />

          <h1 className="App-title"><b>OCTOCATJEDI 2023!!!!!!!!!!!!!!"</b></h1>
        </header>
        <p className="App-intro">
          O lado negro da força!!
         </p>
        
        <p> Essa é a nossa branch!!!"</p>

        <p className="App-intro">
          Minha Feature Prof

        </p>
      </div>
    );
  }
}

export default App;
