import clearDay from '../assets/01d.png';
import clearNight from '../assets/01n.png';
import fewCloudsDay from '../assets/02d.png';
import fewCloudsNight from '../assets/02n.png';
import clouds from '../assets/030450dn.png';
import showerRain from '../assets/09dn.png';
import rainDay from '../assets/10d.png';
import rainNight from '../assets/10n.png';
import thunderstorm from '../assets/11dn.png';
import snow from '../assets/13dn.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './searchinfo.css';



function SearchInfo(){
    let city = 0;
    city = useParams().city;

    const [weatherData, setWeatherData] = useState(undefined);

    useEffect(() => {
        setWeatherData(undefined);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec6597680d29dc6b93d0586e8e08bc0f&units=metric`)
            .then(response => response.json())
            .then(data => {
                switch(data.weather[0].icon){
                    case '01d':
                        data.weather[0].icon = clearDay;
                        break;
                    case '01n':
                        data.weather[0].icon = clearNight;
                        break;
                    case '02d':
                    data.weather[0].icon = fewCloudsDay;
                    break;
                    case '02n':
                        data.weather[0].icon = fewCloudsNight;
                        break;
                    case '03d':
                    case '03n':
                    case '04d':
                    case '04n':
                    case '50d':
                    case '50n':
                        data.weather[0].icon = clouds;
                        break;
                    case '09d':
                    case '09n':
                        data.weather[0].icon = showerRain;
                        break;
                    case '10d':
                        data.weather[0].icon = rainDay;
                        break;
                    case '10n':
                        data.weather[0].icon = rainNight;
                        break;
                    case '11d':
                    case '11n':
                        data.weather[0].icon = thunderstorm;
                        break;
                    case '13d':
                    case '13n':
                        data.weather[0].icon = snow;
                        break;
                    default :
                        data.weather[0].icon = clouds;
                        break;
                }
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