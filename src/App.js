import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <div className="App">
          <Header />
        </div>
      </Grid>
      </Router>
    );
  }
}

export default App;
