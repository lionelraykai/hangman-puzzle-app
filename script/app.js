// HTTP 
const puzzleEl = document.querySelector( '#puzzle')
const guessesEl = document.querySelector( '#guesses') 
let game1 




window.addEventListener('keypress', (e) => {
   const guess = String.fromCharCode(e.charCode)
   game1.makeGuess(guess)
   render()
})

const render = () => {
   puzzleEl.textContent = game1.Puzzle
   guessesEl.textContent = game1.StatusMassage
}

const startGame = async () => {
   const puzzle = await getPuzzle('2')
   game1 = new Hangman(puzzle, 5)
   render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle('2').then((Puzzle) => {
   console.log(Puzzle)
}).catch((err) => {
   console.log(`Error: ${err}`)   
})





