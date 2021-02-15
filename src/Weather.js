import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {

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
      <h1> New York </h1>
      <ul> 
          <li> Monday 07:00 </li>
          <li> Cloudy </li>
      </ul>
      <div className="row">
          <div className="col-12">
              <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Mainly Cloudy" />
              <span className="temperature"> 6</span> 
              <span className="unit">°C | °F</span>
          </div>
        </div>
      <div className="row"> 
        <div className="weatherinfo">
        Precipitation: 15 | Humidity: 75% | Wind: 10 km/h
        </div>
          </div>
      </div>
    )
}