import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"
import image from "./images/backGround.webp"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) the variable draw is using template literals for both rank and suit. To call a random index from 0 through the length of the array. Using Math.random() to return a random number between 0 and 1 then multiplying it by the length of the array. Finally using Math.floor to round down to the nearest whole number. Allowing it to return an index location and interpolate the index of the rank and then the suit symbol to follow.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) This conditional statement sets the condition for the function drawCard. If the state hand has an index that matches what draw produces and that index strictly equals a value that doesn't exist draw a card. This code prevents cards from containing the same rank and suit as another card drawn.
    if (hand.indexOf(draw) === -1) {
      // 3) The setHand function call updates the state variable hand using the spread operator to produce a new array containing both the rank and suit in 1 index postition. then updating hand to reflect that new array.
      setHand([...hand, draw])
      // 4) This is a condition that checks to see if the length of the array contained within the state variable called hand equals 52 elements. It's specifically checking to see if the array does not contain 52 elements.
    } else if (hand.length !== 52) {
      // 5) If our code above proves true and the state does not contain an array with 52 elements inside of it. It will activate the drawCard() function. Resulting in another card being drawn on the UI.
      drawCard()
      // 6)This is out catch all statement. The final piece of our decision tree. If all other conditions are not met this will be inacted.
    } else {
      // 7) This sends an alert to the UI allowing the user to see that all the cards have been dealt. All of the possible rank and suit combinations have been returned and the length of our State array called hand is equal to 52. Since both the above conditions could not be met this is the final message letting you know you've drawn all 52 cards of the deck.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }

  return (
    <>
    <div>
    <h1>Draw a Card</h1>
    <img className="image" src={image} alt="" />
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </div>
    
    </>
  )
}

export default App
