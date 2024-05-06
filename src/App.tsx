import {Component} from "react"

import Header from "./components/Header"

import CurrentTimeAndDate from "./components/CurrentTimeAndDate"

//import CurrentWeatherReport from "./components/CurrentWeatherReport"

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
        <ExampleTesting isDarkMode = {isDarkMode} city={city}/>
        <div className="current-timedate-and-forecast-container">
            <CurrentTimeAndDate isDarkMode = {isDarkMode}/>
            <FiveDaysForeCast isDarkMode = {isDarkMode}/>
        </div>
   </div>
  )
}
}

export default App
