

function randomCity({city}){
    return(
        <div className='container-item'>
            <h3 className='random-name'>{city.name}</h3>
            <img className='random-weather' src={city.weather[0].icon} alt="weather"/>
            <h4 className='random-dscr'>{city.weather[0].description}</h4>
            <h4 className='random-temp'>{city.main.temp}°C <span className='feels-like'>(feels like {city.main['feels_like']}°C)</span></h4>
        </div>
    )
}

export default randomCity;