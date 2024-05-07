import {useState,useEffect} from "react"

import "./index.css"

 
type user = {
    isDarkMode:boolean,
    city:string
}

type currentWeatherReportDataType = {
            feelsLikeCenti:number,
            feelsLikeFaren:number,
            humidity:number,
            centigrade:number,
            fahrenheit:number,
            windSpeed:number,
            uv:number,
            pressure:number
}

const  ExampleTesting = (props:user)=>{
    const [currentWeatherReport,setWeatherReport] = useState({
            feelsLikeCenti:0,
            feelsLikeFaren:0,
            humidity:0,
            centigrade:0,
            fahrenheit:0,
            windSpeed:0,
            uv:0,
            pressure:0
    });

    const [isCentigrade,setDegreeType] = useState(true)

    const changeDegreeType = ()=>{
        setDegreeType(!isCentigrade)
    }
    
    

    const getWeatherData = async()=>{
        const {city} = props;
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=58b5d8f6b1a54dc98be44216240405&q=${city}`)
            const jsonData = await response.json()
            const {current} = jsonData;
            const updatedCurrentWeatherData:currentWeatherReportDataType = {
            feelsLikeCenti:current.feelslike_c,
            feelsLikeFaren:current.feelslike_f,
            humidity:current.humidity,
            centigrade:current.temp_c,
            fahrenheit:current.temp_f,
            windSpeed:current.wind_kph,
            uv:current.uv,
            pressure:current.pressure_mb
        }
        setWeatherReport(updatedCurrentWeatherData)
        } catch (error) {
            console.log(error)
        }
        
       
       

     
    } 

    
  useEffect(()=>{
    getWeatherData()
  },[props.city]);

        const {humidity,centigrade,fahrenheit,windSpeed,uv,pressure,feelsLikeCenti,feelsLikeFaren} = currentWeatherReport;
        const {isDarkMode} = props
        const fontCssValue = isDarkMode?`current-weather-report-time-container`:`current-weather-report-time-container ${"current-weather-report-time-container-light-mode"}`
        return(
            <div className={fontCssValue}>
                <div>
                        <div>
                            <h1>{isCentigrade?centigrade:fahrenheit}<sup>0</sup>{isCentigrade?"C":"F"}</h1>
                            <p >Feels like:<span>{isCentigrade?feelsLikeCenti:feelsLikeFaren}<sup>0</sup>{isCentigrade?"C":"F"}</span></p>
                        </div>
                        <div className="sun-rise-img-time-part-container">
                            <img className="sun-rise-image" src={isDarkMode?"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714977758/sunrise-white_1_rhnenn.png":"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714991401/sunrise-white_1_jzdftl.png"}/>
                            <div>
                                <p>Sunrise</p>
                                <p >6:37 AM</p>
                            </div>
                            
                        </div>
                        <div className="sun-set-img-time-part-container">
                            <img className="sun-set-image" src={isDarkMode?"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714977790/sunset-white_1_ctnkbw.png":"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714991364/sunset-white_1_xodqhx.png"}/>
                            <div>
                                <p>Sunset</p>
                                <p>20:37 AM</p>
                            </div>
                        </div>
                </div>
                <div className="btn-img-heading-container">
                    <button type="button" onClick={changeDegreeType} className="type-of-temperature">{isCentigrade?"Centigrade":"Fahrenheit"}</button>
                    <p>Click above button to change to {isCentigrade?"Farenheit":"Centigrade"}</p>
                    <img className="sun-image" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714818347/clear_1_d38qqe.png"/>
                    <h1>Sunny</h1>
                </div>  
                <div>
                    <div className="humidity-windspeed-parts-container">
                         <div className="humidity-part-container">
                            <img className="weather-icons" src={isDarkMode?"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976430/humidity_1_ixvfjz.png":"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714991429/humidity_1_q8yak9.png"}/>
                            <p>{humidity}%</p>
                            <p>Humidity</p>
                         </div>
                         <div className="humidity-part-container">
                            <img className="weather-icons" src={isDarkMode?"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976691/wind_1_urrsst.png":"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714991461/wind_1_cduk4i.png"}/>
                            <p>{windSpeed}km/h</p>
                            <p>Wind Speed</p>
                         </div>
                    </div>
                    <div className="pressure-uv-parts-container">
                         <div className="humidity-part-container">
                            <img className="weather-icons" src={isDarkMode?"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976762/pressure-white_1_xlco0a.png":"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714991491/pressure-white_1_hojbuy.png"}/>
                            <p>{pressure}hPa</p>
                            <p>Pressure</p>
                         </div>
                         <div className="humidity-part-container">
                            <img className="weather-icons" src={isDarkMode?"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714976792/uv-white_1_yqylay.png":"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714991513/uv-white_1_dgtjlb.png"}/>
                            <p>{uv}</p>
                            <p>UV</p>
                         </div>
                    </div>
                </div>
            </div>
        )
    
}


export default ExampleTesting
