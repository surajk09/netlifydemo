import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Main"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
                <Main/>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
