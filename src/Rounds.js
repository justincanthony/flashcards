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
    if (turn.evaluateGuess() && this.turns <= this.deck.length) {
      this.turns++;
      return turn.giveFeedback();
    } else if (!turn.evaluateGuess() && this.turns <= this.deck.length) {
      this.turns++
      this.incorrectGuesses.push(turn.card.cardNum);
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return 100 * ((this.turns - this.incorrectGuesses.length) / this.turns);
  }

  endRound() {
    let percentage = Math.round(this.calculatePercentCorrect());
    console.log(`**Round Over!** You answered ${percentage}% of the questions correctly!`)
    return `**Round Over!** You answered ${percentage}% of the questions correctly!`
  }
}
module.exports = Round;