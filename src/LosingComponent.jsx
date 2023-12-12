import React, { useEffect, useState } from "react";
import App from "./App";
import PropTypes from 'prop-types';

export default function LosingComponent({ userCardInput, setUserCardInput, hasUserLost, setHasUserLost, setClickedCards, bestScore }) {
    let newValue;

    return ( 
        <> 
        <div className="losing-msg-container">
        <h1>Game Over, Play Again?</h1> 
     <label>How many cards for next game?</label>
     <input type="number" min="0" max="52" onChange={e => newValue = e.target.value}/>
     <button onClick={(() => {

         setUserCardInput(newValue);

            setHasUserLost(false);

            newValue = '';

            setClickedCards([]);

    })}>Restart</button>

      </div>
    </>
  );
}
