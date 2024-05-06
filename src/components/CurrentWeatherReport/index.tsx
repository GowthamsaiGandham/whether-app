import {Component} from "react"

import "./index.css"

 
type user = {
    isDarkMode:boolean,
    city:string
}

class CurrentWeatherReport extends Component<user>{
    state = {
        currentWeatherReport:{}
    }
    
    getWeatherData = async()=>{
        const {city} = this.props;
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=58b5d8f6b1a54dc98be44216240405&q=${city}`)
        const jsonData = await response.json()
        const {current} = jsonData;
        const updatedCurrentWeatherData = {
            feelsLikeCenti:current.feelslike_c,
            feelsLikeFaren:current.feelslike_f,
            humdity:current.humidity,
            centigrade:current.temp_c,
            farenheat:current.temp_f,
            windSpeed:current.wind_kph,
            uv:current.uv,
            pressure:current.pressure_mb
        }
     this.setState({currentWeatherReport:updatedCurrentWeatherData})
    } 

    
    componentDidMount(): void {
        this.getWeatherData()
    }



    render(){
        const {isDarkMode} = this.props
        const fontCssValue = isDarkMode?`current-weather-report-time-container`:`current-weather-report-time-container ${"current-weather-report-time-container-light-mode"}`
        return(
            <div className={fontCssValue}>
                <div>
                        <div>
                            <h1>24<sup>0</sup>C</h1>
                            <p >Feels like:<span>22<sup>0</sup>C</span></p>
                        </div>
                        <div className="sun-rise-img-time-part-container">
                            <img className="sun-rise-image" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714977758/sunrise-white_1_rhnenn.png"/>
                            <div>
                                <p>Sunrise</p>
                                <p >6:37 AM</p>
                            </div>
                            
                        </div>
                        <div className="sun-set-img-time-part-container">
                            <img className="sun-set-image" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714977790/sunset-white_1_ctnkbw.png"/>
                            <div>
                                <p>Sunset</p>
                                <p>20:37 AM</p>
                            </div>
                        </div>
                </div>
                <div className="btn-img-heading-container">
                    <button type="button" className="type-of-temperature">Centigrade</button>
                    <p>Click above button to change to Fahrenheit</p>
                    <img className="sun-image" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714818347/clear_1_d38qqe.png"/>
                    <h1>Sunny</h1>
                </div>  
                <div>
                    <div className="humidity-windspeed-parts-container">
                         <div className="humidity-part-container">
                            <img className="weather-icons" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976430/humidity_1_ixvfjz.png"/>
                            <p>41%</p>
                            <p>Humidity</p>
                         </div>
                         <div className="humidity-part-container">
                            <img className="weather-icons" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976691/wind_1_urrsst.png"/>
                            <p>2km/hr</p>
                            <p>Wind Speed</p>
                         </div>
                    </div>
                    <div className="pressure-uv-parts-container">
                         <div className="humidity-part-container">
                            <img className="weather-icons" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976762/pressure-white_1_xlco0a.png"/>
                            <p>997hpa</p>
                            <p>Pressure</p>
                         </div>
                         <div className="humidity-part-container">
                            <img className="weather-icons" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976792/uv-white_1_yqylay.png"/>
                            <p>8</p>
                            <p>UV</p>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CurrentWeatherReport
