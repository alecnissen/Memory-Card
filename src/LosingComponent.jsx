import React from "react";
import App from "./App";
import PropTypes from 'prop-types';

export default function LosingComponent() {
    return ( 
        <> 

        <div className="losing-msg-container">
        <h1>Game Over, Play Again?</h1> 
     <label>How many cards for next game?</label>
     <input type="number" min="0" max="52"/>
     <button onClick={(() => { 
      console.log('you clicked the restart btn for a new game');
      // how will you capture the value that the user enters in the input field? 
      // state variable? Then retrieve it
      // This is where we want to make another fetch call, and render based on how many cards the user selects
      // useEffect is probably going to go into here, because this will happen on the click,
     })}>Restart</button>

      </div>
        
        </>
    )
}