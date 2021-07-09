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
    let newCards = prototypeQuestions.map(function (question) {
      let newCard = new Card(
        question.id,
        question.question,
        question.answers,
        question.correctAnswer
      );
      return newCard;
    });
    let deck = new Deck(newCards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}
module.exports = Game;
