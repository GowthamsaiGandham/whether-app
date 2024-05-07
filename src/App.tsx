import {Component} from "react"

import Header from "./components/Header"

import CurrentTimeAndDate from "./components/CurrentTimeAndDate"


import HourlyForeCast  from "./components/HourlyForecast"

import ExampleTesting from "./components/ExampleForTesting"

import FiveDaysForeCast from "./components/FiveDaysForeCast"

import './App.css'

class App extends Component{
  state = {
    isDarkMode:true,
    city:"hyderabad",
  }

  updateCity = (updatedCity:string)=>{
    this.setState({city:updatedCity})
  }

  changeMode = ()=>{
    const {isDarkMode} = this.state
    this.setState({isDarkMode:!isDarkMode})
  }

  render(){
    const {isDarkMode,city} = this.state
    const bgContainerCssValue = isDarkMode?`bg-container`:`bg-container-light-mode`
  return(
   <div className={bgContainerCssValue}>
        <Header  isDarkMode={isDarkMode} changeMode={this.changeMode} updateCity={this.updateCity}/>
        <div className="current-data-container">
            <CurrentTimeAndDate isDarkMode = {isDarkMode}/> 
            <ExampleTesting isDarkMode = {isDarkMode} city={city}/>
        </div>
        <div className="forecast-data-container">  
            <FiveDaysForeCast isDarkMode = {isDarkMode}/>
            <HourlyForeCast isDarkMode = {isDarkMode}/>
        </div>
          
   </div>
  )
}
}

export default App
