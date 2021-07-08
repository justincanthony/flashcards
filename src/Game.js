const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Rounds');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    let newCards = prototypeQuestions.map(function(question) {
      let newCard = new Card(question.id, question.question, question.answers, question.correctAnswer)
      return newCard;
    });
    let newDeck = new Deck(newCards);
    let currentGame = new Round(newDeck);
    this.currentRound = currentGame;
    this.printMessage(newDeck, currentGame);
    this.printQuestion(currentGame);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}
module.exports = Game;