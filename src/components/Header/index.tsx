import {ChangeEvent, Component} from "react"

import { CiSearch } from "react-icons/ci";

import { FaLocationCrosshairs } from "react-icons/fa6";

import "./index.css"

type headerDataType = {
   changeMode:()=>void,
   isDarkMode:boolean,
   updateCity:(updatedCity:string)=>void,
}

class Header extends Component<headerDataType>{
            state = {
               inputSearch:""
            }
            
            onChangingMode = ()=>{
               this.props.changeMode()
            }

            onUpdatingCity = ()=>{
               const {inputSearch} = this.state
               this.props.updateCity(inputSearch)
               this.setState({inputSearch:""})
            }
   
            onChangeInputSerchValue=(event:ChangeEvent<HTMLInputElement>)=>{
                this.setState({inputSearch:event.target.value})
            }

            render(){
            const {isDarkMode} = this.props

            const {inputSearch} = this.state

            const toggleBtnCssValue = isDarkMode?`toggle-btn`:`toggle-btn ${"toggle-btn-light-mode"}`

            const modeCaptionCSSValue = isDarkMode?`mode-caption`:`mode-caption ${"mode-caption-light-mode"}`

            const searchIconCss = isDarkMode?"search-icon":`search-icon ${"search-icon-light-mode"}`

            const searchInputCss = isDarkMode?"search-input":`search-input ${"search-input-light-mode"}`

            return(<div  className="header-container">
                                 <div className="toggle-btn-and-caption-elements-container">
                                    <div className={toggleBtnCssValue} onClick={this.onChangingMode}>
                                          <div className="toggle-btns-black-dot"></div>
                                    </div>
                                    <p className={modeCaptionCSSValue}>{isDarkMode?"Dark Mode":"Light Mode"}</p>
                                 </div>
                                 <div className="search-icon-input-elements-container">
                                    <CiSearch  className={searchIconCss} onClick={this.onUpdatingCity} />
                                    <input placeholder="Search for your preferred city..."  onChange={this.onChangeInputSerchValue} type = "search" value={inputSearch} className={searchInputCss}/>
                                 </div>
                                 <div className="current-location-icon-and-caption-container">
                                    <FaLocationCrosshairs className="current-location-icon" />
                                    <p className="current-location-caption">Current Location</p>
                                 </div>
                              </div>)
            }
}
export default Header