import { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './Header';
import CardComponent from './CardComponent';
import axios from "axios"


function App() {
  const [data, setData] = useState([]);

  console.log('data before set', data);

  let arrCopy = [...data];
  console.log('arrCopy', arrCopy);

    useEffect(() => { 
        axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
          console.log(resp);
          let code = resp.data.cards;
          console.log(code);
            let cards = resp.data.cards;
            // we got the cards, lets map through them and add them to the array
            console.log('resp.data console.log', resp.data);
            console.log('cards console.log', cards);


              cards.map(card => {
              let cardImg = card.image;
              console.log(cardImg);
              setData([...data, cardImg]);
              console.log('data after set', data);
            });
        });
    }, []);
  

  return (
    <>
      <HeaderText></HeaderText>
      {/* <img width={200} src={data} /> */}
      <div key={crypto.randomUUID()}>
        {data.map((item) => {
          console.log('logs img url', data);
          <img src={item} width={100} />;
      })}
      </div>
    </>
  );
}

export default App;
