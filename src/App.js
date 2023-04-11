import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";

function App() {

  const dict = {
                'Name':'Phani',
                'Age':22
              }
  
  const Names = ["Toxic","Light","Ryuk","Reyna","Sova","BrimStone","Raze","Cypher"] // this is a list

  const [showText,setShowText] = useState(true);
  const [catFact,setCatFact]  = useState("");
  useEffect(()=>{ 
    /*
      built-in hook in React that allows functional components to perform side effects, such as fetching data from a server, updating the DOM, or subscribing to a WebSocket.
      Very useful if we are updating a component, fetching data from server updating a hook (useState)
      */
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);          // for every time the showText is set we call this API using Axiom
    })
    console.log("Function Triggered")
  },[showText]);            

  return (
    <div className="App">
      <User Name={dict.Name} Age={dict.Age}/>
      {dict.Age>= 18 ? <h1 style={{color:"purple"}}>Manly</h1> : <h1>KID</h1>}
      
      <p style={{backgroundColor:"black"}}>
        { Names.map((name,index)=>{
          return <h4 key={index} style={{color:"orange",backgroundColor:"navy"}}>{name}</h4>
        })}
      </p>
    
    {/* Below Example demonstrates about the use state hooks in react*/}

    <button onClick={()=>{
      setShowText(!showText)
    }}> Display/Hide Name</button>
    {showText && <h3>User Name : {dict.Name}</h3>}

    <p>{catFact}</p>  {/*This is set for every time showText Change */}
    </div>
  );
}

/* This is a function which returns Components (JSX)
JSX :  Combination of both HTML and JavaScript

Quick Note:
  -> Components should always start with Capital letters
*/

const User = (props) => {
  return (
    <div>
      <h1>{props.Name}</h1>
      <h2>{props.Age}</h2>
    </div>
  )
}


export default App;
