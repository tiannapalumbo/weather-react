import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            country: response.data.sys.country
            });
    }

    function search() {
        const apiKey = "6e8ce867bc46f41d0e8f2b0e41afed08";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }
    //city

    function handleSubmit(event) {
    event.preventDefault();
    search();
    }
    //search for a city 

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-10">
              <input
                type="search"
                className="form-control form-control-sm shadow-sm border-0"
                placeholder="Search for a city"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData}/>
      </div>
    );  
    } else {
    search();
    return "Loading...";
    }
}