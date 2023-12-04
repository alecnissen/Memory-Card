import { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './Header';
import CardComponent from './CardComponent';
import axios from "axios"
import PropTypes from 'prop-types';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log('data before set', data);

  useEffect(() => {
      // old async function without error handling, 
    // async function getCards() {
    //   await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
    //   setData(resp.data.cards);
    // },);
    //   }
    //   getCards()
    // new async function with error handling,
    const getCards = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10");
        setData(response.data.cards);
      } catch (error) { 
        if (error.response) { 
            // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      // this one is hit
      setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');

        } else if (error.request) {
          // IF THIS BLOCK IS HIT THE PAGE CRASHES
          // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      setError(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // this one is hit,
      console.log('Error', error.message);
      setError(error.message);
        }
        // this one is hit 
        console.log(error.config);
      } finally {
        setLoading(false);
      }
    };
    getCards();
  }, []);

  return (
    <>
      <HeaderText></HeaderText>
      <CardComponent data={data}></CardComponent>
      {<div className="error-styles">{error}</div>}

      {loading && <h1 className="loading-styles">Loading...</h1>} 
    </>
  );
}

export default App;







// async function getCards() {
//   await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
//   setData(resp.data.cards);
  

// },);
//   } 