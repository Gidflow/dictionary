import React, {useState} from 'react';
import './App.css';
import { useGlobalContext} from "./components/contextApi/AppContext";
import Input from './components/Input';
import Header from "./components/Header";
import Card from './components/Card';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from './components/ErrorMessage';
          

function App() {

  const [searchWord, setSearchWord] = useState("");
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [inputError, setInputError] = useState("")
  const {theme, value, changeTheme, handleChange, play} = useGlobalContext();

  const getMeaning = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      const data = await response.data[0];
       console.log(data);
      if(data){
        setData(data);
      }
      else{
        setData(null)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(ErrorMessage(), error);
    }
  };
  const handleInput =(e)=>{
    setSearchWord(e.target.value)

    if (value.trim() === '') {
      setInputError('Input cannot be empty');
    } else {
      setInputError('');
    }
  }

  const handleSubmit=(e)=>{
  e.preventDefault();

       getMeaning();
  }

  const playAudio=()=>{
    let audio = new Audio(data.phonetics[0].audio);

    audio.play();
  }

  // console.log(data);

  return (
    <div style={{fontFamily:value}} className={`${theme && "black text-light"} App py-5`}>
      
       <Header changeTheme={changeTheme} theme={theme} value={value} handleChange={handleChange}/>
       <Input theme = {theme} searchWord={searchWord} handleChange={handleInput} handleSubmit={handleSubmit}/>
       {!data && searchWord?<div className='err'>{error&&error}</div>:<Card theme={theme} play={play} searchWord={searchWord}  data={data} playAudio={playAudio}/>}
       
        
      
      </div>
    
  );
}

export default App;
