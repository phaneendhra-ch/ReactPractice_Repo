import './App.css';
import { useState } from 'react';

function App() {

  const dict = {
                'Name':'Phani',
                'Age':22
              }
  
  const Names = ["Toxic","Light","Ryuk","Reyna","Sova","BrimStone","Raze","Cypher"] // this is a list

  const [showText,setShowText] = useState(true);

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
