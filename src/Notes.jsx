// *** 12/1
// make a header component,
// feeling good about the header, now we need to make the main component section 
// use grid 

// *** 

// can now access a card! 
// use that 42 card deck, I dont see an option for full deck? 
// even when I test out the project example im following I dont see 
// 52 cards listed when max,
// 

// when page first loads, 10 cards will be displated 
// as an opener or somethijng to understand the game, 
// then once game ends, user can select how many cards from entertering a number or scrolling up and down 
// btn to restart which will render the cards, 
// 
// f

// *** properly get the imgs, 
// how will we make a function which accesses all images, 
// shuffles or loops through them after btn clicked, 
// figure outhow to access all cards with useEffect. 
// how to get all cards first, get the img of all cards first 
// where would this fetch go? a page load component, 
// 

// make the fetch function get the images, 
// display one, 
// call it within app for now


// correctly structure the data. handle error and loading as well, 
// see if you can pass the cards as props into card component 

// *** STRUCTURING OUR CODE
// we have a made a function which can render 10 cards to the screen
// try not to use all of this within app. 
// send the updated state data to card component then use the same mapping process for rendering
// 


// props are working ok 


// *** error handling in axios, 
// I can make an api call which will render 10 cards to the screen,

// I now want to account for errors and loading. 
// I have tried to put a try block within the getCards async function, but 
// it will not let me, 
// I tried putting the try around the function innovation getCards 
// then used a catch block, 

// it still rendered the cards but if I purposly mess up the url, 
// it never hits the catch block, 

// the problem probably is the catch block is not within the async call, 
// but every time I attempt to try block in there, I get an error. 

// what is going on here, I have looked at axios docs and they put the try 
// around the API call, 

// Looks like all the error blocks except one are hit, 
// the block in question is hit but it just crashes the page, 
// still shows the error in the console 

// https error shows, invalid protocal, 
// 404 error, 
// loading screen, 

// *** begin working game logic, 
// user clicks a card, that will become the selected card 
// after each time a card is clicked, re-shuffle the cards and check if the card clicked 
// matches the selected card, 
// keep playing the game until user clicked their selected card, 
// stop the game, render the losing screen, with a btn is restart and select how many cards 
// you want for the next game, 

// first add an onClick to each card, see if you can console log, something back, 
// the more I think, I don't think you even need the card component, this can be handled within app.jsx 
// I think the game logic can all be in app.jsx
// play around with it, bring the map back in the return, 
// jsut copy the return in card and put it back into app 

// keep the card map within app for now, 
// next can we init a selected card variable or state variable, once clicked, it will return back the selected card

// can we call a function which runs when a card is clicked, 
// once card is clicked, call a function which re-shuffles the deck, but it still includes the card you clicked on
// THEN ONCE YOU RE-SHUFFLE THE DECK, CHECK FOR YOUR CARD, 

// can you make a function that re-shuffles the deck when card is clicked, 


// the selected card variable always points the previously selected card,

// once card is clicked, selectedCard variable is updated, 
//then call a function which makes another fetch request to include a new set of 10 cards, 
// BUT THAT SET MUST INCLUDE YOUR CARD!! 

// MAKE ANOTHER FUNCTION WHICH MAKES ANOTHER SET OF 10 CARDS,

// I need to think of a plan on how to begin the game logic, 
// how can  


// ** Create a function, which selects the clicked on card, 
// removes that card from the array, 

// I can select the current card, which returns just the url of the img, 
// I can also map through my card array (data) 
// now I am trying to use a conditional to check if the card clicked on, 
// matches the selected card within the clickedCard function, 

// DETERMINE THE CLICKED ON CARD, 
// RESHUFFLE THE CARDS DON'T GENERATE NEW ONES, JUST RE-SHUFFLE THEM
// DETERMINE IF YOU CLICKED ON THE SELECTED CARD, END THE GAME IF SO

// *** 

// WE HAVE THE SELECTED CARD, WE HAVE THE SHUFFLED DECK IN THE CONSOLE 
// WE CAN DETERMINE IF WE SELECTED THE CLICKED ON CARD FROM THE ARRAY, IT LOGS A MSG 
// NOW WHEN USER CLICKS A CARD, HOW CAN WE SHOW THAT SHUFFLED DECK IN THE DOM???

// HOW CAN WE SHOW THE SHUFFLED DECK IN THE DOM?

// clickedCard function 

// we can select a card, which determines which one was clicked on 
// we can shuffle the cards, 
// we have a conditional which checks, if we clicked the selected card, 
// 

// we have the shuffled new deck, how can we display that? 


// *** card shuffling is working, 
// review changes, and commit, 
// then begin the process of determining if you clicked the same card twice, 

// if you did, have a component render or just some text on the screen display a msg.



// **** 
// find a method to display a msg when the same card is clicked twice, 
// play around, and check behavior 

// it seems like whatever card you click on can change, 
// check the selected card variable, and how it changes, 
// we need to set the selected card variable, 
// but also have another state variable that holds all the cards that were clicked on. 

// two state variables, 

// *** 
// one that holds the single selected card, WHICH CANNOT CHANGE. 
// ANOTHER VARIABLE WHICH HOLDS ALL THE CLICKED ON CARDS IN AN ARRAY, 
// THEN CHECK IF THE CARD IS ALREADY IN THERE. 

// JUST MAKE SURE THAT CARD DOES NOT CHANGE. 

// does the state need to be set right away ? 


//

// *** trying to set a individual card state variable, which will not change, 
// then an array of clicked on cards. 


// clickedOnCards array is working correctly, its adding whatever cards are clicked on.
// Just find a way to have the pickedCard variable STAY THE SAME, IT CANNOT BE UPDATED. 

// Pretty sure this is working, 
// now I need to implement the score features. 
// when card is clicked update the score. 

// *** game over conditional in effect! 
// now keep track of the score, as long as user does not click a card morethan once, points will increment. 
// I am also thinking that I need to remove the function and handle this logic within the cards onClick, 
// do I really need a function to do this, 
// the function can only be used to shuffle the deck, 

// find a way to print a message when the duplicate card is hit. 


// *** 
// the goal for today is to print the losing message with a restart btn and an input to select how many cards for the next round. 
// Will this be a component that I am returning???? 
// or just returning an input with some text, 
// we need to experiment to see how this works. 

// try to return a component, when game is over, 
// what would the component include? 
// a message, 
// a restart btn, 
// an input to select a number of cards for the next round, 
// try it, 
// 


// commit changes, then begin working on score logic, 

// *********************************************

// *** keeping track of score, 
// when would the score variables increment? 
// whenever the user does not click any card more than once, 
// so within the img tag, outside of the if increment the count, 

// start with init a currentScore and best score state variables, 


// reset the score, when game is over, but set whatever score you got for current and make that the best score. 

// 

// *** 12/8
// goal is to make sure that when the player has lost that the current score is not being implemented, 
// play around with it some more, then ask if stuck, 

// I am noticing that once the user loses, it will adds to the current score, 
// when user loses, game stops and scores are final. 

// should not be able to implement the score when the user has lost, 

// 


// *** useEffect async call, 
// the problem is my state is being updated but the value won't change till re-render so user can still increment score when user has lost. 

// i've tried to put my setting the hasUserLost variable within a useEffect function, as well as running in the effect each time hasUserLost variable is changed 

// but I am not getting the behavior I expect, my player lost module is being printed to the screen and the score is not incremeneting at all. 

// I am confused on how to make this work.

// *** missing in props validation error, 


// *** 
// once game is over, fetching a new batch of cards based on user input, 
// you got user value now plug that value into the fetch api call. 
// console.log the results you get 

// **** 


// refactor the state variable to hold a default value of 10, then pass the user input into the API call, 