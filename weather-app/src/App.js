import React, { Component } from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const apiKey = "e742b6bf9ab4c7d277f4f9bef4bc924d";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const data = await apiCall.json();
    console.log(data);
  };

  render() { 
    return ( 
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
     );
  }
};
 
export default App;

