import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <br />
        <div className="row">
          <div className="col-lg-12"><SearchBar /></div>
        </div>
        <div className="row">
          <div className="col-lg-12"><WeatherList /></div>
        </div>
      </div>
    );
  }
}
