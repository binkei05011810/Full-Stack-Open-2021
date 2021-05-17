import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetail(props) {
    const { name, capital, population, languages, flag } = props.country;
    const [weather, setWeather] = useState({ location: {}, current: {} });

    useEffect(() => {
        const params = {
            key: process.env.REACT_APP_API_KEY,
            q: name,
            aqi: 'no'
        }

        async function fetchData() {
            const data = await axios.get('http://api.weatherapi.com/v1/current.json', { params });
            setWeather(data.data);

        }

        fetchData();
    }, [name])

    return (
        <div>
            <h2>{name}</h2>
            <p>capital: {capital}</p>
            <p>population: {population}</p>

            <h2>languages</h2>
            <ul>
                {languages.map((lang, i) => {
                    return <li key={i}>{lang.name}</li>
                })}
            </ul>

            <img src={flag} />

            <h2>Weather in {weather.location.name}</h2>
            <p><b>Temperature: </b>{weather.current.temp_c} Celcius</p>

            <p><b>Wind: </b>{weather.current.wind_mph} mph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default CountryDetail;