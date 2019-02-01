import React, { Component } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Mushroom from '../Mushroom/Mushroom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Mushroom />
      </div>
    );
  }
}

export default App;
