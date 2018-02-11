import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        </div>
      </Router>
    );
  }
}

export default App;
