import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";


export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo" > 
        <h1> {props.data.city}, {props.data.country} </h1>
    <ul> 
    <li className="formatdate"> <FormattedDate date={props.data.date} />   
        </li>
        <li className="text-capitalize"> {props.data.description} 
        </li>
    </ul>
    <div className="row">
        <div className="col-6">
            <div className="clearfix">
                <div className="float-left">
             <WeatherIcon code={props.data.icon} />   
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature}/>  
            </div>
           </div> 
        </div>
      <div className="col-6">
          <ul> 
            <li><span className="weatherinfo">Feels like: <span className="desc"> {Math.round(props.data.feelsLike)} °C </span> </span></li> 
            <li><span className="weatherinfo"> High: <span className="desc"> {Math.round(props.data.maxtemp)} °C </span> </span></li>
            <li><span className="weatherinfo"> Low: <span className="desc"> {Math.round(props.data.mintemp)} °C </span> </span></li>
            <li><span className="weatherinfo"> Humidity: <span className="desc"> {props.data.humidity}% </span> </span></li>
            <li><span className="weatherinfo">Wind: <span className="desc"> {Math.round(props.data.wind)} km/h </span> </span></li> 
          </ul>
      </div>
      </div>
      </div>
    );
    
}
