import React from 'react'
import "./Header.css";
import {FaBook, FaMoon} from "react-icons/fa"
import {MdToggleOff, MdToggleOn} from "react-icons/md"
const Header = ({theme, changeTheme, value, handleChange}) => {


  return (
    <div className='headerStyle'>
    <FaBook size={30} stroke='#757575' strokeWidth={15} color='transparent'/>
    <div className='d-flex justify-content-center align-items-center gap-2'>
    <select value={value} onChange={handleChange} className={`${theme && "text-white black"} border-o`}>
        <option  value="Inter">Sans Serif</option>
        <option value="Lora">Serif</option>
        <option value="Inconsolata">Mono</option>
      </select> 
      {theme ? <div className='iconDiv'><div className='toggleSPan'></div><span className=' toggleIcon '  ><MdToggleOn size={40}   color='#A445ED'  /></span></div>:
      <div><MdToggleOff  size={40} color='#757575' /></div>}
      
      {theme?<FaMoon onClick={changeTheme}  color='transparent' stroke='#A445ED' strokeWidth={20} size={18} />:<FaMoon onClick={changeTheme} color='transparent' stroke='black' strokeWidth={20} size={18} />}
      
    </div>

    </div>
  )
}

export default Header