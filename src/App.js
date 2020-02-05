import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello, I\'m Bhargav'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.string}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.setState({ string: 'Hello Dev Community!' })}>Change name</button>
        </header>
      </div>
    ); 
  }
}

export default App;
