import {Component} from "react"

import "./index.css"
 
type user = {
    isDarkMode:boolean
}

class CurrentWeatherReport extends Component<user>{
    render(){
        const {isDarkMode} = this.props
        const fontCssValue = isDarkMode?`current-weather-report-time-container`:`current-weather-report-time-container ${"current-weather-report-time-container-light-mode"}`
        return(
            <div className={fontCssValue}>
                <div>
                        <div>
                            <h1>24<sup>0</sup>C</h1>
                            <p>Feels like:<span>22<sup>0</sup>C</span></p>
                        </div>
                        <div>
                            <p>Sunrise</p>
                            <p>6:37 AM</p>
                        </div>
                        <div>
                            <p>Sunrise</p>
                            <p>20:37 AM</p>
                        </div>
                </div>
                <div>
                    <img className="sun-image" src="https://res.cloudinary.com/dlwlnr20m/image/upload/v1714818347/clear_1_d38qqe.png"/>
                    <h1>Sunny</h1>
                </div>  
            </div>
        )
    }
}


export default CurrentWeatherReport
