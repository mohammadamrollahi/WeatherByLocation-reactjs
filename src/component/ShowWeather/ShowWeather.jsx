import React from 'react'
import "./ShowWeather.scss"
function ShowWeather({myWeather}) {
    return (
        <div className="weather-container">
            <div className="cityDiv">
                <p>{myWeather.city},{myWeather.country}</p>
                
            </div>
            <div className="details.div">
                <img src={"http://openweathermap.org/img/wn/"+myWeather.icon+"@2x.png"} alt="" srcset=""/>
    <p>{Math.floor(+myWeather.temp-273)} °C {myWeather.status}</p>
                
            </div>
            
        </div>
    )
}

export default ShowWeather
