import React, { Component } from 'react';
import SearchBar from '../containers/search-bar'
import WeatherList from '../containers/weather-list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
