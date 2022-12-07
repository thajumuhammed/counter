

import { useState } from 'react'
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);
  // counter- state - to hold values

  function incrementCounter(){
setCounter(counter+1);
  } 


      function nonegativeCounter(){
        if(counter>0){
            setCounter(counter-1);
            }
           
        }

        function resetCounter(){
          setCounter(0);
            } 


        


  return (
    <div
    style={{
      display:'flex',
      flexdirection:'column',
      alignItem:'center',
      justifyContent:'center'
    }}
    className="App">
      <header className="App-header">
        <h3 
        style={{
          display:'flex',
           flexdirection:'column',
           alignItem:'center',
           justifyContent:'center',
           color:'darkgreen',
           fontFamily:'cursive'
          
        }}
        >Counter Application</h3>
        <h2 style={{
           display:'flex',
           flexdirection:'column',
           alignItem:'center',
           justifyContent:'center',
           color:'skyblue'
          
          
        }}
        >{counter}</h2>
        <button 
        style={{backgroundColor:'red',
        color:'white',
        padding:'10px',
        borderRadius:5,
        marginLeft:10,
        fontFamily:'bold'
      }}
        onClick={incrementCounter}>increment</button>
        <button 
        style={{backgroundColor:'blue',
        color:'white',
        padding:'10px',
        borderRadius:5,
        marginLeft:10
      }}
        onClick={nonegativeCounter}>decrement</button> 
        <button
        style={{backgroundColor:'brown',
        color:'white',
        padding:'10px',
        borderRadius:5,
        marginLeft:10
      }}
        onClick={resetCounter}>reset</button> 

      </header>
    </div>
  );
}

export default App;
