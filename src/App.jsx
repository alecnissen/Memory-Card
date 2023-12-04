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
    async function getCards() { 
      await axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
      setData(resp.data.cards)
    });
    }
    getCards();
  }, []);

    // useEffect(() => { 
    //     axios.get("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10").then((resp) => { 
    //       console.log(resp);
    //       console.log(code);
    //         let cards = resp.data.cards;
    //         // we got the cards, lets map through them and add them to the array
    //         console.log('resp.data console.log', resp.data);
    //         console.log('cards console.log', cards);


    //           cards.map(card => {
    //           let cardImg = card.image;
    //           // cardImg.id = crypto.randomUUID();
    //           console.log(cardImg);
    //           setData([...data, cardImg]);
    //           console.log('data after set', data);
    //         });
    //     });
    // }, []);
  

  return (
    <>
      <HeaderText></HeaderText>
      {/* <img width={200} src={data} /> */}
      {data.map((item) => { 
        console.log('item log within return map', item);
        return <div key={item.code}> 
        <img src={item.image} />
        </div>
      })}
    </>
  );
}

export default App;
