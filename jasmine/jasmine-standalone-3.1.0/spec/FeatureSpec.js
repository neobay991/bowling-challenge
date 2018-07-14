'use strict';

describe("Feature Test: ", function() {
  var game;
  var calc;

  beforeEach(function(){
    game = new Game();
    calc = new CalculateScore();
  });

  describe('User can score points in a Frame', function() {
    it('A User can roll and score points', function() {
      game.roll(1);
      game.roll(4);
      expect(game.score()).toEqual(5);
    });
  });

  it('A User can roll a Strike and score 10 points', function() {
    calc.calculateScore(10);
    expect(calc.getScore()).toEqual(10);
  });

  describe('User can score addtional Bonus points for Spare', function() {
    it('A User can roll 10 pins and score bonus points', function() {
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(3);
      game.getBonus();
      expect(game.score()).toEqual(23);
    });

    // TODO - this test will need to be refactored when you
    // include Strike
    it('A User can roll 10 pins and score bonus points', function() {
      game.roll(1);
      game.roll(4);//
      game.roll(4);
      game.roll(5);//
      game.roll(6);
      game.roll(4);//
      game.roll(5);
      game.roll(5);//
            game.getBonus(); //5 // 39 total
      game.roll(10);
      game.roll(0);//
            game.getBonus(); //10
      game.roll(0);
      game.roll(1);//
            game.getBonus(); // 10
      game.roll(7);
      game.roll(3);//
      game.roll(6);
      game.roll(4); ////
            game.getBonus(); //6
      game.roll(10);
      game.roll(0);//
      game.roll(2);
      game.roll(8);//
            game.getBonus(); // 12
      expect(game.score()).toEqual(128);
    });
  });
});
