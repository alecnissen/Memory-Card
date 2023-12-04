import React from "react";
import App from "./App";

export default function CardComponent({ data }) { 
    return ( 
        <> 
        <div className="main-card-container"> 

        <div className="cards-container"> 
            {data.map((item) => { 
        console.log('item log within return map', item);
        return <div key={item.code} className="card-container"> 
        <img src={item.image} />
        </div>
      })}
        </div>
        </div>
        </>
    )
}