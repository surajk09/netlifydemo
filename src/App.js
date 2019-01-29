import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Welcome to live website
          </p>
          <a
            className="App-link"
            href="https://www.htmlrun.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn HTML
          </a>
        </header>
      </div>
    );
  }
}

export default App;
