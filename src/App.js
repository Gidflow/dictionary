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
  const {theme, selected, changeTheme, handleChange, play} = useGlobalContext();

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
    
    const values = e.target.value;
    setSearchWord(values);

    
  }

  const handleSubmit=(e)=>{
  e.preventDefault();
  if (searchWord === '') {
    setInputError("whoops, can't be empty");
  } else if(searchWord){
    setInputError('');
  }
  else if(error){
    setError(ErrorMessage());
  }

       getMeaning();
       
  }

  const playAudio=()=>{
    let audio = new Audio(data.phonetics[0].audio);

    audio.play();
  }

  

  return (
    <div style={{fontFamily:selected?.value}} className={`${theme && "black text-light"} App py-5`}>
      
       <Header changeTheme={changeTheme} theme={theme} selected={selected} handleChange={handleChange}/>
       <Input theme = {theme} searchWord={searchWord} handleChange={handleInput} handleSubmit={handleSubmit} 
       inputError={inputError} data={data}/>
       {!data ? <div className='err'>{error}</div>:<Card theme={theme} play={play} searchWord={searchWord}  data={data} playAudio={playAudio}/>}
       
       
      
        
      
      </div>
    
  );
}

export default App;
