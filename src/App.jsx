import { useState, useEffect, useRef } from 'react';
import './App.css';
import HeaderText from './Header';
import CardComponent from './CardComponent';
import axios from "axios"
import PropTypes from 'prop-types';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // the clicked on cards array
  const [clickedCards, setClickedCards] = useState([]);
  // the single selected card, the users choice, if this card is clicked twice game over. 
  // const [userPick, setUserPick] = useRef();
  const [hasUserLost, setHasUserLost] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // let hasUserLost;



  // this will get printed when the game is over, 
  let losingComponent = () => {
    return (
      <>
     <h1>Game Over, Play Again?</h1> 
     <label>How many cards for next game?</label>
     <input type="number" min="0" max="52"/>
     <button>Restart</button>
     </>
   );
   };

  console.log('data before set', data);

  useEffect(() => {

    // new async function with error handling,
    const getCards = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10");
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
  }, []); 


  function handleCardClick(card) {
    let selectedCard = card;
    clickedCardsArray(selectedCard);
    shuffleCards();
    determineLosingConditions(selectedCard);
    if (!hasUserLost) {
      console.log(hasUserLost);
      console.log('inside the handleCardClick conditional');
      handleScoreChange();
    }
  }

  function determineLosingConditions(selectedCard) {
    if (clickedCards.includes(selectedCard)) {
      setHasUserLost(true);
      setCurrentScore(0);
      let cardContainer = document.getElementsByClassName('cards-container')[0];
      cardContainer.remove();
    }
  }
 
  function handleScoreChange() {

    // setCurrentScore(currentScore + 1);

    const newScore = currentScore + 1;

    setCurrentScore(newScore);

    setBestScore(newScore);
  }

  function clickedCardsArray(card) {
    let selectedCard = card;

    // setting state of whatever card was clicked on. Adding clicked cards to the array, 
    setClickedCards([...clickedCards, selectedCard]);

  }

  function shuffleCards() {
    let shuffled = data.slice().sort(() => Math.random() - 0.5);

    setData(shuffled);
  }

  return (
    <>
      <HeaderText currentScore={currentScore} bestScore={bestScore}></HeaderText>
      <div className="main-card-container"> 

        <div className="cards-container"> 
          {data.map((item) => {
            return <div key={item.code} className="card-container"> 
                <img src={item.image} onClick={((e) => {
                    // when called this will add cards to the clickedCards array,
                    handleCardClick(e.target.src);

        }
        )
        } 
        />
              </div>
      })}


        </div>
        </div>

      {<div className="error-styles">{error}</div>}
      {loading && <h1 className="loading-styles">Loading...</h1>}
      {<div className="losing-msg-container">
        
          {hasUserLost && losingComponent()}

        </div>
      }
    </>
  );
}

export default App;







// async function getCards() {
//   await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
//   setData(resp.data.cards);
  

// },);
//   } 