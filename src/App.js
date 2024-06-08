import React, { useState } from 'react';
import './App.scss';
import CuteAnimation from './CuteAnimation';

function App() {
  const [count,setcount] = useState(0);
  const [yes,setyes] = useState(false);
  const yesbtnsize = count * 20 +16;
  const handlenoclick = () =>{
    setcount(count+1);
  }
  const getbtntxt = () =>{
    const phrases = [
      "No",
      "Nijangana?",
      "kachitanga?",
      "Malla Alochinchu...",
      "Chivari avakasam...!!",
      "Kachitanga odha?",
      "Nuvve tarvatha badha padatav...",
      "sare time teeskoni malla alochinchu",
      "Enti intha alochinchina odha!!",
      "Edho tappu jarugutundi...!!",
      "manasu undale denikaina",
      "niku manasu lede",
      "manasu marchukunnava ayithe?",
      "venaka thirigi chudanu antav..",
      "idena inka ni final answer?",
      "POVE.....!",
      "Sarle yes cheppu..."  
    ]
    return phrases[Math.min(count,phrases.length-1)];
  };
  return (
    <div className='app'>
      {yes ? (
         <>
          <CuteAnimation count ={count}/>
        </>
      ):(
        <>
        <img
            className="waiting"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt='bear-waiting'
          />
        <h1 className='question'> Will You be My valentine?</h1>
        <div className='buttons'>
          <button className='yes-button' onClick={()=>setyes(true)} style={{fontSize: yesbtnsize}}>Yes</button>
          <button className='no-button' onClick={handlenoclick}>{count === 0 ?"No":getbtntxt()}</button>
          
        </div>
        </>
      )
      }
    </div>
  )
}

export default App;
