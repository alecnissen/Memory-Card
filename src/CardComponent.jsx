import React from "react";
import App from "./App";
import PropTypes from 'prop-types';

export default function CardComponent({ data, handleCardClick }) {
  return (
    <>
      <div className="main-card-container">
        <div className="cards-container">
    {data.map((item) => {
            return (
    
    <div key={item.code} className="card-container"> 
        <img src={item.image} onClick={((e) => {
            // when called this will add cards to the clickedCards array,
                    handleCardClick(e.target.src);
            })
}
                />
              </div>
            );
        }
)}
        </div>
      </div>
    </>
  );
}
