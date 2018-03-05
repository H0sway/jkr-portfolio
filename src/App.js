import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <div className="App">
            <Header />
            <Footer />
        </div>
      </Grid>
      </Router>
    );
  }
}

export default App;
