import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            date: "Monday 07:00",
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name
            });
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">
        <form>
          <div className="form-row align-items-center">
            <div className="col-10">
              <input
                type="search"
                className="form-control form-control-sm shadow-sm border-0"
                placeholder="Search for a city"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-1">
              <button
                type="submit"
                className="form-control-sm btn btn-sm btn-light shadow-sm border-0 searchIcon">
                <i className="fas fa-search search-icon" />
              </button>
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-sm btn-outline-light shadow-sm" >
                <i className="fas fa-map-marker-alt" />
              </button>
            </div>
          </div>
        </form>
        <hr/>
      <h1> {weatherData.city} </h1>
      <ul> 
          <li> {weatherData.date} </li>
          <li className="text-capitalize"> {weatherData.description} </li>
      </ul>
      <div className="row">
          <div className="col-12">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature"> {Math.round(weatherData.temperature)}</span> 
              <span className="unit">°C | °F</span>
          </div>
        </div>
      <div className="row"> 
        <div className="weatherinfo">
        Humidity: {weatherData.humidity} % | Wind: {weatherData.wind} km/h
        </div>
          </div>
      </div>
    );  
    } else {
    const apiKey = "6e8ce867bc46f41d0e8f2b0e41afed08";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    return "Loading...";
    }
}