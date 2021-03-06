class Hangman {
   constructor(word, remainingGussesses) {
      this.word = word.toLowerCase().split('')
      this.remainingGussesses = remainingGussesses
      this.guessedLetters = []
      this.status = 'playing'
   }
   calculatestatus() {
      const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

       if(this.remainingGussesses === 0) {
          this.status = 'failed'
       } else if  (finished) {
          this.status = 'finished'
       }else {
          this.status = 'playing'
       }
   }
   get StatusMassage () {
      if(this.status === 'playing') {
         return `Guesses left:${this.remainingGussesses}`
      } else if (this.status === 'failed') {
         return `nice try! the word was "${this.word.join('')}"`
      } else {
         return 'great work! you guessed the word'
      }
   }
   get Puzzle () {
      let puzzle = ''

      this.word.forEach((letter) => {
         if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
         }else {
            puzzle += '*'
         }
      })
      
         return puzzle
   }
   makeGuess(guess) {
      guess = guess.toLowerCase()
      const isUnique = !this.guessedLetters.includes(guess)
      const isBadGuess = !this.word.includes(guess)
   
       if(this.status !== 'playing') {
          return
       }
   
      if (isUnique) {
         this.guessedLetters.push(guess)
      }
   
      if (isUnique && isBadGuess) {
         this.remainingGussesses--
      }
   
      this.calculatestatus()
   }
}

