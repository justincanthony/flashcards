const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Rounds');

describe('Round', function() {
  it('should be instantiated with a deck of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })
  it('should be able to return the current card in play', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(round.deck[round.turns]);
  })
  it('should start with 0 turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  })
  it('should start with no incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  })
  it('should be able to take a player guess and return the outcome', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);


    const firstTurn = round.takeTurn('sea otter');
    const secondTurn = round.takeTurn('gallbladder');
    const thirdTurn = round.takeTurn('gallbladderwrong');

    expect(firstTurn).to.equal('correct!');
    expect(secondTurn).to.equal('correct!');
    expect(thirdTurn).to.equal('incorrect!');
    expect(round.turns).to.equal(3);
    expect(round.incorrectGuesses).to.deep.equal([12]);
  })
  // it('should')
  // it('should')
  // it('should')
  // it('should')
})
