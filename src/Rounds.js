const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[this.turns]);
    if (turn.evaluateGuess()) {
      this.turns++;
      return turn.giveFeedback();
    } else {
      this.turns++
      this.incorrectGuesses.push(turn.card.cardNum);
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
   return 100 * ((this.turns - this.incorrectGuesses.length) / this.turns);
  }

}
module.exports = Round;