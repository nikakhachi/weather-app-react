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

function assignWeatherToImage(data){
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
}

export default assignWeatherToImage;