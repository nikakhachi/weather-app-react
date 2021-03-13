import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './searchinfo.css';
import assignWeatherToImage from '../../services/services';



function SearchInfo(){
    let city = 0;
    city = useParams().city;

    const [weatherData, setWeatherData] = useState(undefined);

    useEffect(() => {
        setWeatherData(undefined);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_TOKEN_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                // Assigns image corresponding to weather
                assignWeatherToImage(data);
                setWeatherData(data);
            })
            .catch(error => setWeatherData('NOT FOUND'))
    }, [city]);
    return (
            <div id='search-main-div'>
                {!weatherData ? <div></div> : weatherData === 'NOT FOUND' ? ( <div id='not-found'>
                    <p id='not-city'>CITY NOT FOUND</p>
                    <p id='not-spell'>Check the spelling and try again</p>  
                </div>) : <div id='main-div'>
                    <h3 id='location'>{weatherData.name}, {weatherData.sys.country}</h3>
                    <div id='info-container'>
                        <div id="item">
                            <img id='weather-img' src={weatherData.weather[0].icon} alt="Weather img"/>
                        </div>
                        <div id='item1'>
                            <p id='temp'>{weatherData.main.temp}°C</p>
                            <p id='description'>{weatherData.weather[0].description}</p>
                            <p id='feels-like'>Feels like {weatherData.main['feels_like']}°C</p>
                        </div> 
                        <div id='item2'>
                            <p className='item2'>Max.Temperature : {weatherData.main['temp_max']}°C</p>
                            <p className='item2'>Min.Temperature : {weatherData.main['temp_min']}°C</p>
                            <p className='item2'>Pressure : {weatherData.main.pressure}hpa</p>
                            <p className='item2'>Humidity : {weatherData.main.humidity}%</p>
                            <p className='item2'>Cloudiness : {weatherData.clouds.all}%</p>
                            <p className='item2'>Visibility : {weatherData.visibility/1000}km</p>
                            <p className='item2'>Wind Speed : {weatherData.wind.speed}%km/h</p>   
                        </div>   
                    </div> 
                </div>}
            </div>
    )          
}

export default SearchInfo;