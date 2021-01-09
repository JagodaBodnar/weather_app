import React, { Component } from "react";
import styled from "styled-components";

const StyledWeatherContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  margin: 15px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  color: #fff;
`;
const StyledMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledCityAndDateContainer = styled.div`
  margin: 20px 10px;
  font-family: "Dosis", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StyledCityName = styled.h1`
  font-weight: 300;
  font-size: 35px;
  margin: 2px 0px;
  text-transform: uppercase;
`;
const StyledDayName = styled.h2`
  font-weight: 300;
  margin: 2px 0px;
  text-transform: uppercase;
  color: #d6d0d0;
`;
const StyledDate = styled.h4`
  margin: 2px 0px;
  font-weight: 200;
  color: #d6d0d0;
`;
const StyledDetails = styled.h4`
  margin: 2px 0px;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  color: #d6d0d0;
`;
const StyledImageTempContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0px;
`;
const StyledTemperature = styled.h1`
  font-weight: 300;
  font-size: 45px;
  margin: 2px 0px;
`;
const StyledRemainedInfoContainer = styled.div`
  margin: 20px 0px;
  font-family: "Dosis", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledDetailTitle = styled.p`
  color: #fff;
  margin: 0;
  font-weight: 500;
`;

class DisplayWeather extends Component {
  render() {
    const {
      cityName,
      country,
      temperature,
      wind,
      pressure,
      sunrise,
      sunset,
      weatherIcon,
    } = this.props;
    const handleSunrise = () => {
      const sec = sunrise;
      const date = new Date(sec * 1000);
      const timestr = date.toLocaleTimeString();
      return timestr;
    };
    const handleSunset = () => {
      const sec = sunset;
      const date = new Date(sec * 1000);
      const timestr = date.toLocaleTimeString();
      return timestr;
    };
    const handleToday = () => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = days[new Date().getDay()];
      return today;
    };
    const handleDate = () => {
      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      return `${day}/${month}/${year}`;
    };

    const iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

    return (
      <>
        <StyledWeatherContainer>
          {country.length !== 0 ? (
            <>
              <StyledMainContainer>
                <StyledCityAndDateContainer>
                  <StyledCityName>{cityName}</StyledCityName>
                  <StyledDayName>{handleToday()}</StyledDayName>
                  <StyledDate>{handleDate()}</StyledDate>
                </StyledCityAndDateContainer>
                <StyledImageTempContainer>
                  <img src={iconURL} />
                  <StyledTemperature>
                    {" "}
                    {parseInt(temperature - 273)}°C{" "}
                  </StyledTemperature>
                </StyledImageTempContainer>
              </StyledMainContainer>

              <StyledRemainedInfoContainer>
                <StyledDetails>
                  <StyledDetailTitle>Wind</StyledDetailTitle> {wind}km/h{" "}
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailTitle>Pressure</StyledDetailTitle> {pressure} hPa
                </StyledDetails>

                <StyledDetails>
                  <StyledDetailTitle>Sunrise</StyledDetailTitle>{" "}
                  {handleSunrise()}
                </StyledDetails>
                <StyledDetails>
                  <StyledDetailTitle>Sunset</StyledDetailTitle> {handleSunset()}
                </StyledDetails>
              </StyledRemainedInfoContainer>
            </>
          ) : (
            "There is no such city. Try again!"
          )}
        </StyledWeatherContainer>
      </>
    );
  }
}
export default DisplayWeather;
