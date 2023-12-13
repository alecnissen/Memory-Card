import React, { useEffect, useState } from "react";
import App from "./App";
import PropTypes from 'prop-types';

// two state values, 

export default function LosingComponent({ userCardInput, setUserCardInput, hasUserLost, setHasUserLost, setClickedCards, bestScore, value, setValue, clickHandler }) {
    // let newValue;

    return ( 
        <> 
        <div className="losing-msg-container">
        <h1>Game Over, Play Again?</h1> 
     <label>How many cards for next game?</label>
     <input type="number" min="0" max="52" required defaultValue={userCardInput} onChange={e => setValue(e.target.value)}/>
     <button onClick={(() => {

        // if (value === null) { 
        //     setUserCardInput(userCardInput);
        // }


            console.log(userCardInput);

            console.log(value);
            
        //    clickHandler();

        // console.log(newValue);

         setUserCardInput(value);


            setHasUserLost(false);

            // newValue = '';

            setClickedCards([]);

    })}>Restart</button>

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
