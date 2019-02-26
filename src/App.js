import React, { Component,Fragment } from 'react';
import './App.css';
import Navbar from './Comonents/Navbar';
import Routes from './Comonents/Routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Routes />

      </Fragment>
    );
  }
}

export default App;
