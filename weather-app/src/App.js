import React, { Component } from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const apiKey = "e742b6bf9ab4c7d277f4f9bef4bc924d";

class App extends Component {

  getWeather = async () => {
    const apiCall = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=Kristiansand,nor&appid=${apiKey}`);
    const data = await apiCall.json();
    console.log(data);
  };

  render() { 
    return ( 
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
     );
  }
};
 
export default App;

