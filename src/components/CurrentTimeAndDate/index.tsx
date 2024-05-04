import {Component} from "react"

import "./index.css"

const week = {
  day1:"Monday",day2:"Tuesday",day3:"Wednesday",day4:"Thursday",day5:"Friday",day6:"Saturday",day7:"Sunday"}

type User={
  isDarkMode:boolean,
}

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
       const min = dateObj.getMinutes()
       const hour = dateObj.getHours()
       const currentTime = `${hour}:${min}`
       this.setState({time:currentTime})
      },1000)
  }

  render(){
    const {time} = this.state
    const {isDarkMode} = this.props
    const fontCssValue = isDarkMode? `current-time-and-date-container`:`current-time-and-date-container ${"current-time-and-date-container-light-mode"}`
    return (
        <div className={fontCssValue}>
            <h1 className="athens-heading">Athens</h1>
            <p className="current-time">{time}</p>
            <p className="current-day-and-date">Sunday,05 May</p>
        </div>
    )
  }
}

export default CurrentTimeAndDate