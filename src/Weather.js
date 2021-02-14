import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {

    return (
      <div className="Weather"> 
      <form> 
        <div className="row">
            <div className="col-9">
          <input 
          type="search" 
          placeholder="Search for a City..." 
          className="form-control"
          />
            </div>
            <div className="col-3">
          <input 
          type="submit" 
          value="Search" 
          className="btn btn-light" 
          />
            </div>
        </div>
      </form>
      <h1> New York </h1>
      <ul> 
          <li> Monday 07:00 </li>
          <li> Cloudy </li>
      </ul>
      <div className="row">
          <div className="col-12">
              <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" />
              6°C
          </div>
        </div>
      <div className="row"> 
        <div className="col-12">
        Precipitation: 15 | Humidity: 75% | Wind: 10 km/h
        </div>
          </div>
      </div>
    )
}