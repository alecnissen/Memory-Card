import React from 'react';

// eslint-disable-next-line react/prop-types
export default function HeaderText({ currentScore, bestScore }) {
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
  );
}
