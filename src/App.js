import React, { Component } from 'react';

import RestaurantList from './restaurant.js';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <RestaurantList/>
      </div>
    );
  }
}

export default App;
