import React from "react"; 

// header and score container here, 

// make a function which includes title and subtitle which includes directions, 

export default function HeaderText({ currentScore, bestScore }) { 
    // console.log(currentScore);
    // console.log(bestScore);

    return ( 
        <> 
        <div className="header-container">
        <div className="header-main-title-subtitle-container">
        <h1>Memory Card Game</h1>
        <h4>Click on cards to earn points, but don't click the same card twice!</h4>
        </div>
        <div className="header-score-container">
        <h5>Current Score: {currentScore}</h5>
        <h5>Highest Score: {bestScore}</h5>
        </div>
        </div>
        </>
    )
}