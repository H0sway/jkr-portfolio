import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Grid>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Footer />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
