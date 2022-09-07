import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

function Weather() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f259f431a440426a153f2596106d582f`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        }
    }


    return (
        <div className='weather'>
            <div className='search'>
                <input 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location for weather"
                type="text"></input>
            </div>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temp'>
                        {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
                    </div>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

            {data.name != undefined &&
                <div className='bottom'>
                    <div className='feels'>
                        {data.main ? <p>{data.main.feels_like}</p> : null}
                        <p>Feels like</p>
                    </div>
                    <div className='humidity'>
                        {data.main ? <p>{data.main.humidity}</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className='wind'>
                        {data.wind ? <p>{data.wind.speed}</p> : null}
                        <p>Wind</p>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Weather;