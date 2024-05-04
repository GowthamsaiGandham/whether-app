import { CiSearch } from "react-icons/ci";

import { FaLocationCrosshairs } from "react-icons/fa6";

import "./index.css"

type headerDataType = {
   changeMode:()=>void,
   isDarkMode:boolean
}

const Header = (props:headerDataType)=>{
const {changeMode,isDarkMode} = props
const onChangingMode = ()=>{
   changeMode()
}

const toggleBtnCssValue = isDarkMode?`toggle-btn`:`toggle-btn ${"toggle-btn-light-mode"}`

const modeCaptionCSSValue = isDarkMode?`mode-caption`:`mode-caption ${"mode-caption-light-mode"}`

const searchIconCss = isDarkMode?"search-icon":`search-icon ${"search-icon-light-mode"}`

const searchInputCss = isDarkMode?"search-input":`search-input ${"search-input-light-mode"}`

return(<div  className="header-container">
                      <div className="toggle-btn-and-caption-elements-container">
                          <div className={toggleBtnCssValue} onClick={onChangingMode}>
                               <div className="toggle-btns-black-dot"></div>
                          </div>
                          <p className={modeCaptionCSSValue}>{isDarkMode?"Dark Mode":"Light Mode"}</p>
                      </div>
                      <div className="search-icon-input-elements-container">
                         <CiSearch  className={searchIconCss}/>
                         <input placeholder="Search for your preferred city..." type = "search" className={searchInputCss}/>
                      </div>
                      <div className="current-location-icon-and-caption-container">
                         <FaLocationCrosshairs className="current-location-icon" />
                         <p className="current-location-caption">Current Location</p>
                      </div>
                   </div>)
}

export default Header