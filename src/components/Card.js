import React from 'react'
import {FaPlay} from "react-icons/fa";
import { MdOpenInNew } from 'react-icons/md';
import "./Card.css";


const Card = ({theme,  data, playAudio, searchWord}) => {
  //  const meaning = data.meanings.map(meaning=>meaning);
  //  console.log(meaning);

  console.log(data);

       
  return (
    <>
    {data &&
    <div className='card1  mt-4 '>
     <div className='keyword'>
        <div className='d-flex justify-content-between align-items-center'>
        <h1 style={{fontWeight:"700", fontSize:"64"}} className='text-capitalize'>{data?.word}</h1>
        {
          data.phonetics[0].audio && <span className='play mx-2'>< FaPlay  onClick={playAudio} className="play-purple" size={12}/></span>
        }    
        </div>
      <span><p style={{color:"#a445ed"}}>{data?.phonetic}</p></span>
     </div>
    {data &&<div>
      {data.meanings.map((meaning, index)=>{
       return <div className='mt-4'  key={index}>
        <div className='d-flex justify-content-start align-items-center  gap-2'>
        <span className=''><p style={{fontSize:"24", fontWeight:"700"}}><em>{meaning.partOfSpeech}</em></p></span>
        <div className={`${theme && "lineDark"} line`}></div>
        </div>
         
         <p style={{color:"#757575"}}>meaning</p>
         <ul  style={{fontSize:"15", lineHeight:"2"}}>
           {meaning.definitions.map((define, index)=>{
             return <li key={index}>{define.definition}</li>
           })}
         </ul>
        
         <p className="wrap-it">{meaning.synonyms[0] && <span style={{color:"#757575"}}>synonyms</span>}
         {meaning?.synonyms.slice(0, 3).map((synonyms, index)=>{
            if(synonyms){
             return <span key={index} style={{marginLeft:"1rem", color:"#A445ED"}}>{synonyms}</span>
            }
           
           })}
           
         </p>
       </div>
      })}
      
     </div>
    }
    <div className={`${theme && "lineDark"} line`} ></div>
     <div className='d-flex gap-2  source'>
        <span style={{color:"#757575"}}>Source </span>
        <span className='d-flex gap-1'><a href={data.sourceUrls}>{data.sourceUrls[0]}</a><span><MdOpenInNew/></span></span>
      </div>
     </div>}
     </>
  )
}

export default Card