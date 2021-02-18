import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo" > 
        <h1> {props.data.city} </h1>
    <ul> 
        <li className="text-capitalize"> {props.data.description} </li>
    </ul>
    <div className="row">
        <div className="col-12">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span className="temperature"> {Math.round(props.data.temperature)}</span> 
            <span className="unit">°C | °F</span>
        </div>
      </div>
    <div className="row"> 
      <div className="col-12">
      <span className="weatherinfo"> Humidity: {props.data.humidity} % | Wind: {props.data.wind} km/h </span> 
      </div>
      </div>
      <br/>
           <div className="formatdate"> <FormattedDate date={props.data.date} />   
        </div>
</div>
    );
    
}
