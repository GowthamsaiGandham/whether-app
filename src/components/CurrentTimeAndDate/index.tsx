import {Component} from "react"

import "./index.css"

type User={
  isDarkMode:boolean,
}

const weekDay = {
  day1:"Monday",
  day2:"Tuesday",
  day3:"Wednesday",
  day4:"Thursday",
  day5:"Friday",
  day6:"Saturday",
  day7:"Sunday"
};


const month = {
  month0:"January",
  month1:"February",
  month2:"March",
 month3:"April",
  month4:"May",
  month5:"June",
  month6:"July",
  month7:"August",
  month8:"September",
  month9:"October",
  month10:"November",
  month11:"December"
};

class CurrentTimeAndDate extends Component<User>{
  state = {
     time:"",
     day:"",
     date:"",
     month:""
  }

  componentDidMount(){
     setInterval(()=>{
       const dateObj  = new Date()
       let  min = dateObj.getMinutes()
       const hour = dateObj.getHours()
       
       let resultant_min:string;
       if(min < 10){
        resultant_min = `0${min}`
       }
       else{
        resultant_min = `${min}`
       }

       let resultant_hour:string;
       if(hour >= 22){
        resultant_hour = `${hour-12}`
       }
       else if(hour >= 12){
        resultant_hour = `0${hour-12}`
       }
       else{
          resultant_hour = `${hour}`
       }

       let timeCaption:string;
       if(hour < 12){
        timeCaption = "AM"
       }
       else{
        timeCaption = "PM"
       }
       const currentDate = dateObj.getDate()
       const a:string = `day${dateObj.getDay()}`;
       const currentDay:string = weekDay[a];
       const b:string = `month${dateObj.getMonth()}`
       const currentMonth:string = month[b]
       const currentTime = `${resultant_hour}:${resultant_min} ${timeCaption}`
       this.setState({time:currentTime,date:currentDate,day:currentDay,month:currentMonth})
      },1000)
  }

  render(){
    const {time,day,date,month} = this.state
    const {isDarkMode} = this.props
    const fontCssValue = isDarkMode? `current-time-and-date-container`:`current-time-and-date-container ${"current-time-and-date-container-light-mode"}`
    return (
        <div className={fontCssValue}>
            <h1 className="athens-heading">Athens</h1>
            <p className="current-time">{time}</p>
            <p className="current-day-and-date">{day}, {date} {month}</p>
        </div>
    )
  }
}

export default CurrentTimeAndDate