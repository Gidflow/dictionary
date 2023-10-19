import React, {createContext, useContext, useState}from 'react';


 const GlobalContext = createContext();

export const useGlobalContext =()=> useContext(GlobalContext)

const AppContext = ({children}) => {

    const [theme, setTheme] = useState(false);
    const [value, setValue] = useState("Inter");
    const [play, setPlay] = useState(false);


    const changePlay=()=>{
        setPlay(prev=>!prev);
    }
    const changeTheme=()=>setTheme(prev=>!prev);

    const handleChange = (e) => {
        setValue(e.target.value);
      };
  return (
       <GlobalContext.Provider value={{theme, changeTheme, value, handleChange, play, changePlay}}>
           {children}
       </GlobalContext.Provider>
  )
}

export default AppContext