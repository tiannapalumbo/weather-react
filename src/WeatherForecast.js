import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] =useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast row">
                <div className="col"> 
                10:00 
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
            {Math.round(forecast.list[0].main.temp)}
             </div>
             <div className="col"> 
                10:00 
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
            {Math.round(forecast.list[0].main.temp)}
             </div>
             <div className="col"> 
                10:00 
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
            {Math.round(forecast.list[0].main.temp)}
             </div>
             <div className="col"> 
                10:00 
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
            {Math.round(forecast.list[0].main.temp)}
             </div>
             <div className="col"> 
                10:00 
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
            {Math.round(forecast.list[0].main.temp)}
             </div>
            </div>
        );
        
        
    } else {
        let apiKey = "6e8ce867bc46f41d0e8f2b0e41afed08";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(url).then(handleForecastResponse);

        return null;
    }
}