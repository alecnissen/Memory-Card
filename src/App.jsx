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

  // console.log('data before set', data);

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

  // useEffect(() => { 
  //   // async function getCards() {
  //   //   await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
  //   //   setData(resp.data.cards);
  //   // },);
  //   async function reshuffleCards() { 
  //        await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
  //         setData(resp.data.cards);
  //   });
  //   }
  //   reshuffleCards();
  // }, []);

  // function reshuffleCards() { 
  //   getCards();
  // }

  function clickedCard(card) {
    let selectedCard = card;

    console.log('clicked on card', selectedCard);

    let shuffled = data.sort(() => Math.random() - 0.5);

    console.log('the shuffled card deck', shuffled);

    setData(shuffled);

    console.log('card array, after updating the state', data); 

    data.map((card) => {
     console.log(card.image);
      if (card.image === selectedCard) {
        console.log('found the matching card');
        // alert('Game over! Play again? ')
        // setData(data.filter((item) => item.image !== selectedCard));
      }
    });

    // return shuffled;
  }


  return (
    <>
      <HeaderText></HeaderText>
      {/* <CardComponent data={data}></CardComponent> */} 
      <div className="main-card-container"> 

        <div className="cards-container"> 
          {data.map((item) => {
            // console.log('item log within return map', item);
            return <div key={item.code} className="card-container"> 
                <img src={item.image} onClick={((e) => {
            console.log('the card we clicked on', e.target.src);
      // setSelectedCard(e.target);

                    clickedCard(e.target.src);

        })} />
        </div>
      })}


        </div>
        </div>

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