import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form``;
const StyledInput = styled.input`
  outline: none;
  font-family: "Dosis", sans-serif;
  background: #353d45;
  border: none;
  height: 30px;
  width: 200px;
  margin: 0;
  padding: 0;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;
const StyledButton = styled.button`
  font-family: "Dosis", sans-serif;
  border: none;
  cursor: pointer;
  outline: none;
  background: #fff;
  height: 30px;
`;

class WeatherForm extends Component {
  render() {
    const { getWeather } = this.props;
    return (
      <StyledForm onSubmit={getWeather}>
        <StyledInput
          type="text"
          name="cityName"
          placeholder="Enter city name"
          required
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    );
  }
}
export default WeatherForm;
