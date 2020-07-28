import React from 'react'
import "./ShowWeather.scss"
function ShowWeather({myWeather}) {
    return (
        <div className="weather-container">
            <div className="cityDiv">
                <p>{myWeather.city} {myWeather.country}</p>
                <p></p>
            </div>
        </div>
    )
}

export default ShowWeather
