import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo" > 
        <h1> {props.data.city}, {props.data.country} </h1>
    <ul> 
        <li className="text-capitalize"> {props.data.description} </li>
    </ul>
    <div className="row">
        <div className="col-12">
            <WeatherIcon code={props.data.icon} />
            <span className="temperature"> {Math.round(props.data.temperature)}</span> 
            <span className="unit">°C | °F</span>
        </div>
      </div>
    <div className="row"> 
      <div className="col-12">
      <span className="weatherinfo"> Humidity: {props.data.humidity}% | Wind: {Math.round(props.data.wind)} km/h </span> 
      </div>
      </div>
      <br/>
           <div className="formatdate"> <FormattedDate date={props.data.date} />   
        </div>
</div>
    );
    
}
