import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather />
       <hr/>
          <div>
            <footer>
              <a
                href="https://github.com/tiannapalumbo/weather-react"
                id="githublink"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Open-sourced code{" "}
              </a>
              on GitHub by Tianna Palumbo
            </footer>
          </div>
      </div>
    </div>
  );
}