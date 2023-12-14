import { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './Header';
import CardComponent from './CardComponent';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import LoadingComponent from './LoadingComponent';
import LosingComponent from './LosingComponent';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [hasUserLost, setHasUserLost] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [value, setValue] = useState(10);
  const [userCardInput, setUserCardInput] = useState(10);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${userCardInput}`
        );
        console.log('userCardInput within useEffect', userCardInput);
        setData(response.data.cards);
        console.log('card array called within useEffect ', data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError('Server responded with ' + ' ' + error.response.status + ' ' + 'error');
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          setError(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          setError(error.message);
        }
        console.log(error.config);
      } finally {
        setLoading(false);
      }
    };
    getCards();
  }, [userCardInput]);

  function handleCardClick(card) {
    let selectedCard = card;
    clickedCardsArray(selectedCard);
    shuffleCards();
    if (!determineLosingConditions(selectedCard)) {
      handleScoreChange();
    }
  }

  function determineLosingConditions(selectedCard) {
    if (clickedCards.includes(selectedCard)) {
      setHasUserLost(true);
      setCurrentScore(0);
      return true;
    }
    return false;
  }

  function handleScoreChange() {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  function clickedCardsArray(card) {
    let selectedCard = card;
    setClickedCards([...clickedCards, selectedCard]);
  }

  function shuffleCards() {
    let shuffled = data.slice().sort(() => Math.random() - 0.5);
    setData(shuffled);
  }

  return (
    <>
      <HeaderText currentScore={currentScore} bestScore={bestScore}></HeaderText>
      {!hasUserLost && (
        <CardComponent handleCardClick={handleCardClick} data={data}></CardComponent>
      )}
      {error && <ErrorComponent error={error}></ErrorComponent>}
      {loading && <LoadingComponent></LoadingComponent>}
      {hasUserLost && (
        <LosingComponent
          userCardInput={userCardInput}
          setUserCardInput={setUserCardInput}
          hasUserLost={hasUserLost}
          setHasUserLost={setHasUserLost}
          setClickedCards={setClickedCards}
          value={value}
          setValue={setValue}
          bestScore={bestScore}></LosingComponent>
      )}
    </>
  );
}

export default App;
