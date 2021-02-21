import React, {Component} from 'react';

import clearDay from '../../assets/01d.png';
import clearNight from '../../assets/01n.png';
import fewCloudsDay from '../../assets/02d.png';
import fewCloudsNight from '../../assets/02n.png';
import clouds from '../../assets/030450dn.png';
import showerRain from '../../assets/09dn.png';
import rainDay from '../../assets/10d.png';
import rainNight from '../../assets/10n.png';
import thunderstorm from '../../assets/11dn.png';
import snow from '../../assets/13dn.png';

import './randominfo.css';

import capitals from './country-capitals';



// On each load, 3 random capital city is generated and stored.
const randomCities = [];
for(let i = 0; i < 3; i++){
    let random = Math.floor(Math.random() * capitals.length);
    randomCities.push(capitals[random]);
    // If two of the three cities in arrays are same, this while loop corrects it.
    while(capitals.indexOf(randomCities[i-1]) === random || capitals.indexOf(randomCities[i-2]) === random){
        random = Math.floor(Math.random() * capitals.length);
        randomCities.pop();
        randomCities.push(capitals[random]);
    }
};


let data1; let data2; let data3;


class RandomInfo extends Component{
    state = {
        loading: true,
        cities: null
    };

    async componentDidMount() {
        const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCities[0]}&appid=${process.env.REACT_APP_TOKEN_KEY}&units=metric`);
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCities[1]}&appid=${process.env.REACT_APP_TOKEN_KEY}&units=metric`);
        const response3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCities[2]}&appid=${process.env.REACT_APP_TOKEN_KEY}&units=metric`);
        data1 = await response1.json();
        data2 = await response2.json();
        data3 = await response3.json();

        // THIS LOONG 3 SWITCH STATEMENTS APPLIES IMAGE TO CORRESPONDING WEATHER
        switch(data1.weather[0].icon){
                case '01d':
                    data1.weather[0].icon = clearDay;
                    break;
                case '01n':
                    data1.weather[0].icon = clearNight;
                    break;
                case '02d':
                   data1.weather[0].icon = fewCloudsDay;
                   break;
                case '02n':
                    data1.weather[0].icon = fewCloudsNight;
                    break;
                case '03d':
                case '03n':
                case '04d':
                case '04n':
                case '50d':
                case '50n':
                    data1.weather[0].icon = clouds;
                    break;
                case '09d':
                case '09n':
                    data1.weather[0].icon = showerRain;
                    break;
                case '10d':
                    data1.weather[0].icon = rainDay;
                    break;
                case '10n':
                    data1.weather[0].icon = rainNight;
                    break;
                case '11d':
                case '11n':
                    data1.weather[0].icon = thunderstorm;
                    break;
                case '13d':
                case '13n':
                    data1.weather[0].icon = snow;
                    break;
                default :
                    data1.weather[0].icon = clouds;
                    break;
            }
            switch(data2.weather[0].icon){
                case '01d':
                    data2.weather[0].icon = clearDay;
                    break;
                case '01n':
                    data2.weather[0].icon = clearNight;
                    break;
                case '02d':
                   data2.weather[0].icon = fewCloudsDay;
                   break;
                case '02n':
                    data2.weather[0].icon = fewCloudsNight;
                    break;
                case '03d':
                case '03n':
                case '04d':
                case '04n':
                case '50d':
                case '50n':
                    data2.weather[0].icon = clouds;
                    break;
                case '09d':
                case '09n':
                    data2.weather[0].icon = showerRain;
                    break;
                case '10d':
                    data2.weather[0].icon = rainDay;
                    break;
                case '10n':
                    data2.weather[0].icon = rainNight;
                    break;
                case '11d':
                case '11n':
                    data2.weather[0].icon = thunderstorm;
                    break;
                case '13d':
                case '13n':
                    data2.weather[0].icon = snow;
                    break;
                default :
                    data2.weather[0].icon = clouds;
                    break;
            }
            switch(data3.weather[0].icon){
                case '01d':
                    data3.weather[0].icon = clearDay;
                    break;
                case '01n':
                    data3.weather[0].icon = clearNight;
                    break;
                case '02d':
                   data3.weather[0].icon = fewCloudsDay;
                   break;
                case '02n':
                    data3.weather[0].icon = fewCloudsNight;
                    break;
                case '03d':
                case '03n':
                case '04d':
                case '04n':
                case '50d':
                case '50n':
                    data3.weather[0].icon = clouds;
                    break;
                case '09d':
                case '09n':
                    data3.weather[0].icon = showerRain;
                    break;
                case '10d':
                    data3.weather[0].icon = rainDay;
                    break;
                case '10n':
                    data3.weather[0].icon = rainNight;
                    break;
                case '11d':
                case '11n':
                    data3.weather[0].icon = thunderstorm;
                    break;
                case '13d':
                case '13n':
                    data3.weather[0].icon = snow;
                    break;
                default :
                    data3.weather[0].icon = clouds;
                    break;
            }

        this.setState({
            cities: [data1, data2, data3],
            loading: false
        })

    }
   
    render(){
        return(
        <div>
            {!this.state.cities ? (<div></div>) : (
            <div id='container'>
                <div className='container-item'>
                    <h3 className='random-name'>{this.state.cities[0].name}</h3>
                    <img className='random-weather' src={this.state.cities[0].weather[0].icon} alt="weather"/>
                    <h4 className='random-dscr'>{this.state.cities[0].weather[0].description}</h4>
                    <h4 className='random-temp'>{this.state.cities[0].main.temp}°C <span className='feels-like'>(feels like {this.state.cities[0].main['feels_like']}°C)</span></h4>
                </div>
                <div className='container-item'>
                    <h3 className='random-name'>{this.state.cities[1].name}</h3>
                    <img className='random-weather' src={this.state.cities[1].weather[0].icon} alt="weather"/>
                    <h4 className='random-dscr'>{this.state.cities[1].weather[0].description}</h4>
                    <h4 className='random-temp'>{this.state.cities[1].main.temp}°C <span className='feels-like'>(feels like {this.state.cities[1].main['feels_like']}°C)</span></h4>
                </div>
                <div className='container-item'>
                    <h3 className='random-name'>{this.state.cities[2].name}</h3>
                    <img className='random-weather' src={this.state.cities[2].weather[0].icon} alt="weather"/>
                    <h4 className='random-dscr'>{this.state.cities[2].weather[0].description}</h4>
                    <h4 className='random-temp'>{this.state.cities[2].main.temp}°C <span className='feels-like'>(feels like {this.state.cities[2].main['feels_like']}°C)</span></h4>
                </div>
            </div>) }
        </div>
    )
    }
}

export default RandomInfo;




            