import {Component} from "react"

import "./index.css"

const forecastData = [{
    id:1,
    img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714820112/clouds_1_qewue9.png",
    temp:"22°C",
    date:"Friday,1Sep"
},{
    id:2,
    img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714820208/mist_1_hi82pj.png",
    temp:"24°C",
    date:"Saturday,2Sep"
},{
    id:3,
    img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714820255/clear_2_sfz1px.png",
    temp:"30°C",
    date:"Sunday,3Sep"
},{
    id:4,
    img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714820356/drizzle_1_myzfgz.png",
    temp:"22°C",
    date:"Sunday,3Sep"
},{
    id:5,
    img:"https://res.cloudinary.com/dlwlnr20m/image/upload/v1714820454/rain_1_heknbi.png",
    temp:"18°C",
    date:"Tuesday,5Sep"
}]

type user = {
    isDarkMode:boolean
}

class FiveDaysForeCast extends Component<user>{
   render(){
    const {isDarkMode} = this.props
    const fontCssvalue = isDarkMode?`five-days-forcast-container`:`five-days-forcast-container ${"five-days-forcast-container-light-mode"}`
    return(
        <div className={fontCssvalue}>
            <h1>5 Days Forecast</h1>
             <table className="five-days-forecast-table-data">
             {forecastData.map(each=>
                    <tr key={each.id}>
    <td><img src={each.img}/></td>
    <td>{each.temp}</td>
    <td>{each.date}</td>
</tr>
                )}  
             </table>
        </div>
    )
   }
}

export default FiveDaysForeCast