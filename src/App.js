import React, { Component } from "react";
import axios from "axios";
import WeatherForm from "./components/WeatherForm";
import DisplayWeather from "./components/DisplayWeather";
import styled from "styled-components";

const StyledAppContainer = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAppTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-family: "Dosis", sans-serif;
  font-weight: 200;
`;

class App extends Component {
  state = {
    cityName: "",
    country: "",
    temperature: 0,
    humidity: 0,
    pressure: 0,
    feelsLike: 0,
    cityNameUpperCase: "",
  };
  getWeather = (e) => {
    e.preventDefault();
    const cityNameValue = e.target.cityName.value;
    const cityNameUpperCase =
      cityNameValue.substring(0, 1).toUpperCase() +
      cityNameValue.substring(1, cityNameValue.length);
    this.setState({ cityNameUpperCase: cityNameUpperCase });

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityNameUpperCase},&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response);
        const { temp, pressure, feels_like } = response.data.main;
        const { name, sys } = response.data;
        const { icon } = response.data.weather[0];
        this.setState({
          cityName: name,
          country: sys.country,
          temperature: temp,
          weatherIcon: icon,
          wind: response.data.wind.speed,
          pressure: pressure,
          feelsLike: feels_like,
          sunrise: sys.sunrise,
          sunset: sys.sunset,
        });
      });
    e.target.reset();
    this.setState({ country: "" });
  };

  render() {
    const {
      cityName,
      country,
      temperature,
      wind,
      pressure,

      cityNameUpperCase,
      sunrise,
      sunset,
      weatherIcon,
    } = this.state;
    return (
      <StyledAppContainer>
        <StyledAppTitle>- Weather App -</StyledAppTitle>
        <WeatherForm getWeather={this.getWeather} />
        {cityNameUpperCase.length !== 0 ? (
          <DisplayWeather
            cityName={cityName}
            country={country}
            weatherIcon={weatherIcon}
            temperature={temperature}
            wind={wind}
            pressure={pressure}
            sunrise={sunrise}
            sunset={sunset}
          />
        ) : (
          ""
        )}
      </StyledAppContainer>
    );
  }
}

export default App;
