import React, { useEffect, useState } from "react";
import App from "./App";
import PropTypes from 'prop-types';

export default function LosingComponent({ userCardInput, setUserCardInput, hasUserLost, setHasUserLost }) {
    let newValue;

    return ( 
        <> 
        <div className="losing-msg-container">
        <h1>Game Over, Play Again?</h1> 
     <label>How many cards for next game?</label>
     <input type="number" min="0" max="52" onChange={e => newValue = e.target.value}/>
     <button onClick={(() => {  

        // make a variable then set the state here? 

        // setUserCardInput(e.target.value)

        // when this btn is clicked it should also clear the clicked on cards array, 

        setUserCardInput(newValue);    

        // setHasUserLost(false);

        console.log(userCardInput);

        console.log(hasUserLost); // user has lost still, so it will print the losing component. 

        // print the card component again, since the value has changed, 

        // once clicked the value will set, 

        // In the input field, we are getting a certain amount of cards, 
        // when the restart btn is pressed, set the new number of cards to the data variable, 
        // 

        // getCards()

     })}>Restart</button>

      </div>
        
        </>
    )
} 


// onChange={e => setUserCardInput(e.target.value)}