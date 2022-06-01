const numberGeneratingGame = () => {
  // username prompt
  prompt("Enter your username: ")
  //generate a random integer from 1 to 15
  const randomInteger = Math.floor(Math.random() * 15) + 1
  // take input from the user
    let guessNumber = parseInt(prompt('Guess a number from 1 to 15: '));
  //conditions
  while(guessNumber !== randomInteger) {
guessNumber = parseInt(prompt('You guessed the wrong NUmber! Game Over'));
  }
  if(guessNumber === randomInteger) {
    return randomInteger + 1
  }
  guessNumber = parseInt(prompt('Congratulations!, You won lets move to the next stage'));
}   
numberGeneratingGame()
