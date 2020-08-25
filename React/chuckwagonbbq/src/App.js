import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navbar className="navHeader" dark color="warning">
          <div classname="container">
            <NavbarBrand href="/">Joe's Chuckwagon BBQ</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
  
  
}

export default App;
