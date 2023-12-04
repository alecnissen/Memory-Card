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