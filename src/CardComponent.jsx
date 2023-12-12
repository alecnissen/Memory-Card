/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function CardComponent({ data, handleCardClick }) {
  return (
    <>
      <div className="main-card-container">
        <div className="cards-container">
          {data.map((item) => {
            return (
    
    <div key={item.code} className="card-container"> 
        <img src={item.image} onClick={((e) => {
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
