const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Rounds');
const Game = require('../src/Game');

describe('Game', () => {
  let game

  beforeEach(() => {
    game = new Game();
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })
  it('should be able to start a game with a new round', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })
})
