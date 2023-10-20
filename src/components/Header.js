import React from 'react'
import "./Header.css";
import {FaBook, FaMoon} from "react-icons/fa"
import {MdToggleOff, MdToggleOn} from "react-icons/md";
import Select from "react-select";


const Header = ({theme, changeTheme, selected, handleChange}) => {

  const options = [
    { value: "Inter", label: "San Serif" },
    { value: "Lora", label: "Serif" },
    { value: "Inconsolata", label: "Mono" }
    
  ];


  const selected_value={value: "Inter", label: "San Serif" }
 console.log(selected);

 const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: theme ?"#fff" :"black",
    backgroundColor:theme?"black":"#fff",
    border:"none",
    padding:"10px"
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: theme? "inherit":"inherit",
    padding: "6px",
    border: "none",
     boxShadow: "none",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color:theme?"#fff":"black" }),
};
  return (
    <div className='headerStyle'>
    <FaBook size={30} stroke='#757575' strokeWidth={15} color='transparent'/>
    <div className='d-flex justify-content-center align-items-center gap-2'>
      <Select options={options} onChange={handleChange} styles={customStyles} value={selected_value}/>
      {theme ? <div className='iconDiv'><div className='toggleSPan'></div><span className=' toggleIcon '  ><MdToggleOn className='active' onClick={changeTheme} size={40}   color='#A445ED'  /></span></div>:
      <div><MdToggleOff className='active' onClick={changeTheme}  size={40} color='#757575' /></div>}
      
      {theme?<FaMoon   color='transparent' stroke='#A445ED' strokeWidth={20} size={18} />:<FaMoon  color='transparent' stroke='black' strokeWidth={20} size={18} />}
      
    </div>

    </div>
  )
}

export default Header