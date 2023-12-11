import { useState, useEffect, useRef } from 'react';
import './App.css';
import HeaderText from './Header';
import CardComponent from './CardComponent';
import axios from "axios"
import PropTypes from 'prop-types';
import ErrorComponent from './ErrorComponent';
import LoadingComponent from './LoadingComponent';
import LosingComponent from './LosingComponent';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // the clicked on cards array
  const [clickedCards, setClickedCards] = useState([]);
  const [hasUserLost, setHasUserLost] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [userCardInput, setUserCardInput] = useState(10);

  console.log('data before set', data);

  useEffect(() => {

    // new async function with error handling,
    const getCards = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=${userCardInput}`);
        setData(response.data.cards);
        console.log('card array ', data)
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
  }, [userCardInput]); // put userCardInput in the depends array, whenever the value in it changes the effect will be ran again, 


  // useEffect which will render a certain amount of cards based on whatever the user enters for input 

  // useEffect(() => {

  //   // async API call, to get cards that user entered for new game
  //   const getInputCards = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${userCardInput}`
  //       );
  //       setData(response.data.cards);
  //       console.log('card array for userInput ', data);
  //     } catch (error) { 
  //       if (error.response) { 
  //           // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //     // this one is hit
  //     setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');

  //       } else if (error.request) {
  //         // IF THIS BLOCK IS HIT THE PAGE CRASHES
  //         // The request was made but no response was received
  //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //     // http.ClientRequest in node.js
  //     console.log(error.request);
  //     setError(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         // this one is hit,
  //     console.log('Error', error.message);
  //     setError(error.message);
  //       }
  //       // this one is hit 
  //       console.log(error.config);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getInputCards();
  // }, [userCardInput]);

  function handleCardClick(card) {
    let selectedCard = card;
    console.log(selectedCard);
    clickedCardsArray(selectedCard);
    shuffleCards();
    if (!determineLosingConditions(selectedCard)) {
      handleScoreChange();
    }
  }

  function determineLosingConditions(selectedCard) {
    if (clickedCards.includes(selectedCard)) {
      setHasUserLost(true);
      // empty the clicked cards array here
      setCurrentScore(0);
      return true;
    }
    return false;
  }
 
  function handleScoreChange() {
    console.log(hasUserLost);
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    setBestScore(newScore);
  }

  function clickedCardsArray(card) {
    let selectedCard = card;
    setClickedCards([...clickedCards, selectedCard]);
    console.log(clickedCards);
  }

  function shuffleCards() {
    let shuffled = data.slice().sort(() => Math.random() - 0.5);
    setData(shuffled);
  } 

  // how can we conditionally render the new set of cards, 
  // already have conditionals if the user has lost and not lost, 
  // if the user hasLost but the input has a new value then render the card component. 

  // values seem flipped, when true it renders card component, 
  // when false it renders the losing component. 

  return (
    <>
      <HeaderText currentScore={currentScore} bestScore={bestScore}></HeaderText> 

      {!hasUserLost && <CardComponent handleCardClick={handleCardClick} data={data}></CardComponent>}

      {error && <ErrorComponent error={error}></ErrorComponent>}

      {loading && <LoadingComponent></LoadingComponent>}

      {hasUserLost && <LosingComponent userCardInput={userCardInput} setUserCardInput={setUserCardInput} hasUserLost={hasUserLost} setHasUserLost={setHasUserLost}></LosingComponent>}

      {userCardInput !== 10 && <CardComponent handleCardClick={handleCardClick} data={data}></CardComponent>} 

    </>
  );
}

export default App; 


// if the user has not lost, and the card input is not the default value, then render the card component and but remove the losing component, 

// just find a way to remove the losing component, 
