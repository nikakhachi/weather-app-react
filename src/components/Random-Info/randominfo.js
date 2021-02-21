import React, {Component} from 'react';
import assignWeatherToImage from '../../services/services';
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

        // Assigns images to weater for each city
        assignWeatherToImage(data1);
        assignWeatherToImage(data2);
        assignWeatherToImage(data3);

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




            