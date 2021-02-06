import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <form class="search" id="search">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter City"
                  autocomplete="off"
                  class="form-control"
                  id="entercity"
                />
              </div>
            </form>
          </div>
          <div class="col-1">
            <button type="submit" class="btn btn-light">
              Search
            </button>
          </div>
        </div>
        <div class="currLoc">
          <button type="button" class="btn btn-outline-light btn-sm">
            Current Location
          </button>
        </div>
        <br />
        <hr />
        <div class="col-6">
          <div class="city-name" id="name">
            <h1>Paris </h1>
          </div>
          <br />
          <br />
          <div class="lastUpdated">
            <h2>
              Last updated: <span id="date"></span>
            </h2>
            <Weather city="Paris"/>
            <h3 id="weatherdesc"> </h3>
          </div>
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-6">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="Clear"
                id="icon"
                class="float-left"
              />
              <div class="temperature1">
                <p>
                  {" "}
                  <span id="temperaturemain"> 20</span>
                  <span class="units">
                    <a href="#" id="celsius-link">
                      °C{" "}
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F{" "}
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Wind: <span class="wind" id="wind"></span> km/hr
                </li>
                <li>
                  Humidity: <span class="wind" id="humidity"></span>%
                </li>
              </ul>
            </div>
          </div>
          <div>
            <footer>
              <a
                href="https://github.com/tiannapalumbo/weather-react"
                id="githublink"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Open-source code{" "}
              </a>
              by Tianna Palumbo
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}