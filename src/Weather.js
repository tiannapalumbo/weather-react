import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} degrees C`);
    }
    let apiKey = "6e8ce867bc46f41d0e8f2b0e41afed08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <h2> Hello from weather</h2>
    )
}