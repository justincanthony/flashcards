const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1, card2, card3, deck;

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
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    deck = new Deck([card1, card2, card3]);
  });

  it('should be instantiated with an array of cards', () => {
    expect(deck.cards[0]).to.deep.equal(card1);
    expect(deck.cards[1]).to.deep.equal(card2);
  });

  it('should be able to count cards in the deck', () => {
    deck.countCards();

    expect(deck.countCards()).to.equal(3);
  });
});
