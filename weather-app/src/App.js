import React, { Component } from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const apiKey = "e742b6bf9ab4c7d277f4f9bef4bc924d";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const data = await apiCall.json();

    if (data.cod === '404') {
      this.setState({
        error: 'City not found'
      });
    } else if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: null,
      });
    } else {
      this.setState({
        error: 'Nothing to geocode'
      });
    }

  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};

export default App;

