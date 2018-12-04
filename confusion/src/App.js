import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="primary" dark>
          <div className="container">
            <NavbarBrand href="/">Resturent</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
