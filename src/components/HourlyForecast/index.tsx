import "./index.css"

const hourlyCastItems = [
    {
        id:1,
        time:"12:30",
        img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715072882/clear_3_m8zhbj.png",
        temp:"26°C",
        image:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715073035/navigation_1_tcuu9z.png",
        windSpeed:"2km/hr"
    },
    {
        id:2,
        time:"15:00",
        img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715072882/clear_3_m8zhbj.png",
        temp:"27°C",
        image:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715074385/navigation_1_zvcycf.png",
        windSpeed:"2km/hr" 
    },
    {
        id:3,
        time:"18:00",
        img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715072955/clouds_2_wj1dhk.png",
        temp:"27°C",
        image:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715074429/navigation_1_qjtlvj.png",
        windSpeed:"3km/hr" 
    },
    {
        id:4,
        time:"21:00",
        img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715072882/clear_3_m8zhbj.png",
        temp:"25°C",
        image:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715074455/navigation_1_atdftt.png",
        windSpeed:"2km/hr" 
    },
    {
        id:5,
        time:"00:00",
        img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715072984/clouds_2_uvwlci.png",
        temp:"22°C",
        image:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1715074495/navigation_1_fxqilr.png",
        windSpeed:"3km/hr" 
    }
]

type user = {
    isDarkMode:boolean
}

const HourlyForeCast = (props:user)=>{
const {isDarkMode} = props
const hourlyForestCastCSS = isDarkMode?"hourly-forecast-container":"hourly-forecast-container-light-mode"

const listStyling  = isDarkMode?"list-container":`list-container ${"list-container-light-mode"}`

return(<div className={hourlyForestCastCSS}>
                              <h1>Hourly Forecast</h1>
                               <ul className="hourly-forecast-items-container">
                                {
                                    hourlyCastItems.map(each=><li key={each.id} className={listStyling}>
                                    <p className="hourly-forecast-descriptions">{each.time}</p>
                                    <img className="hourly-forecast-sun-img" src={each.img}/>
                                    <p className="hourly-forecast-descriptions">{each.temp}</p>
                                    <img className="hourly-forecast-wind-speed-img" src={each.image}/>
                                    <p className="hourly-forecast-descriptions">{each.windSpeed}</p>
                                  </li>)
                                }
                               </ul>
                           </div>)}

export default HourlyForeCast