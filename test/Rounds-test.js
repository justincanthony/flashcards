const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Rounds');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  it('should be instantiated with a deck of cards', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to return the current card in play', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should start with 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to take a player guess and return the outcome', () => {
    const turn = round.takeTurn('sea otter');

    expect(turn).to.equal('correct!');
  });

  it('should be able to take a turn and update the turn count', () => {
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('should be able to take multiple turns and record incorrect answers', () => {
    const turn = round.takeTurn('sea otter');
    const secondTurn = round.takeTurn('spleen');

    expect(turn).to.equal('correct!');
    expect(secondTurn).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should be able to return the next card after a turn has been taken', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should be able to calculate the percentage of correct answers', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should print a message with the percentage of correct answers', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('listening to music');
    round.endRound();
    expect(round.endRound()).to.equal(
      '**Round Over!** You answered 33% of the questions correctly!'
    );
  });
});
