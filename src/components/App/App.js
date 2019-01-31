import React, { Component } from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Mushroom from '../Mushroom/Mushroom';

const colors =['red', 'blue', 'green', 'yellow'];

class App extends Component {
  state= {
    bgColor: 'green'
  };

  selectColor = (color) => {
    this.setState({ bgColor: color });
  }

  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <div className={this.state.bgColor} /><br />
        {/* <button onClick={this.changeColor} style={{margin: 0, padding: 0}}>
          Change color
        </button> */}
        {colors.map( (color, index) =>
        <div key={index} className={color} onClick={() => this.selectColor(color)}/>)}
        <Mushroom />
      </div>
    );
  }
}

export default App;
