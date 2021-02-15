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
              Coded by {" "} 
              <a
                href="https://www.linkedin.com/in/tianna-palumbo/"
                id="linkedinlink"
                target="_blank"
                rel="noreferrer"
              >
                Tianna Palumbo 
                </a> {" "}
              and
              <a
                href="https://github.com/tiannapalumbo/weather-react"
                id="githublink"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                open-sourced on Github {" "}
              </a>
            </footer>
          </div>
      </div>
    </div>
  );
}