import {Component} from "react"

import Header from "./components/Header"

import CurrentTimeAndDate from "./components/CurrentTimeAndDate"

import CurrentWeatherReport from "./components/CurrentWeatherReport"

import FiveDaysForeCast from "./components/FiveDaysForeCast"

import './App.css'

class App extends Component{
  state = {
    isDarkMode:true
  }

  changeMode = ()=>{
    const {isDarkMode} = this.state
    this.setState({isDarkMode:!isDarkMode})
  }

  render(){
    const {isDarkMode} = this.state
    const bgContainerCssValue = isDarkMode?`bg-container`:`bg-container-light-mode`
  return(
   <div className={bgContainerCssValue}>
        <Header  isDarkMode={isDarkMode} changeMode={this.changeMode}/>
        <CurrentTimeAndDate isDarkMode = {isDarkMode}/>
        <CurrentWeatherReport isDarkMode = {isDarkMode}/>
        <FiveDaysForeCast isDarkMode = {isDarkMode}/>
   </div>
  )
}
}

export default App
