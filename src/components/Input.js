import React from 'react';
import "./Input.css";
import {CiSearch} from "react-icons/ci"





const Input = ({theme, handleChange, searchWord, handleSubmit}) => {
    
    
  return (
    <div className={` ${theme && "inputForm2 "} inputForm d-flex mt-4 px-3 py-1 p justify-content-between
    align-items-center`}>
        <form>
          <input type='text' value={searchWord} id='text' 
          onChange={handleChange} className={`${theme && "inputText"} form-control `} placeholder='Search for any word...'
          />
        </form>
        <CiSearch onClick={handleSubmit}  size={20} color='#A445ED'/>
    </div>
  )
}

export default Input