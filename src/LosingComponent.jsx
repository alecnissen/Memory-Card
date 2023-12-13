import React, { useEffect, useState } from "react";
import App from "./App";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

// two state values, 

export default function LosingComponent({ userCardInput, setUserCardInput, hasUserLost, setHasUserLost, setClickedCards, bestScore, value, setValue, clickHandler }) {
    // let newValue;

    return ( 
        <> 
        <div className="losing-msg-container">
        <h1>Game Over, Play Again?</h1> 
     <label>How many cards for next game?</label>
     <input type="number" min="0" max="52" className="card-input-field" required defaultValue={userCardInput} onChange={e => setValue(e.target.value)}/>
     

      </div> 

      <div className="restart-btn-flex-container">

     <Button id="restart-btn-losing-component" variant="primary" size="lg" onClick={(() => {
         setUserCardInput(value);
         setHasUserLost(false);
         setClickedCards([]);
    })}>Restart</Button>

    </div>






    </>
  );
} 





// function App() {
//     const [value, setValue] = useState();
//     const [newValue, setNewValue] = useState(10);
    
//     function clickHandler() {
//       setValue(newValue);
//     }  
  
//     return <>
//       <OtherComponent setNewValue={setNewValue} />
//       <button onClick={clickHandler}>Submit</button>
//     </>
//   }
  
//   function OtherComponent({ setNewValue }) {
//     return <>
//       <input value={newValue} onChange={e => setNewValue(e.target.value)} />
//     </>
//   }
