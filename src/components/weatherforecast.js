import React, { Component } from 'react';

import SearchBar from '../containers/weather_search_bar';
import WeatherList from '../containers/weather_list';

export default class WeatherListApp extends Component {
  render() {
    return (
      <div>
      	<a className="header-link" href="http://simonluu.com">
      		<h1 style={{ textAlign: 'center' }}>U.S 5 Day Forecast</h1>
      	</a>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
