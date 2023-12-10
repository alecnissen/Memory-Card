import React from "react";
import App from "./App";
import PropTypes from 'prop-types';

export default function ErrorComponent({ error }) { 
    return ( 
        <> 
         {<div className="error-styles">{error}</div>}
        </>
    )
}