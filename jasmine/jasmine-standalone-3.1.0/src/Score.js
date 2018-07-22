'use strict';

function Score() {
  // this array logs the score after each frame
  this._totalScore = [];

  // this array logs the score after each roll
  this._rollScore = [];
  this._bonus = [];
}

Score.prototype.storeRollScore = function(kockedDownPins) {
  this._rollScore.push(kockedDownPins);
};

Score.prototype.calculateScore = function(kockedDownPins) {
   this._totalScore.push(kockedDownPins);
};

Score.prototype.getScore = function() {
  let sum = 0,
   counter = 0;

  for (counter = this._totalScore.length; Boolean(counter--);) {
  sum += this._totalScore[counter];
  }
  return sum;
};

Score.prototype.getScoreScard = function() {
   return this._rollScore;
};

Score.prototype.checkBonus = function(index) {

  if (this._rollScore[index - '6'] === 10) {
    if (this._rollScore[index - '4'] === 10) {
      this.addBonus(index);
    }
  } else if (this._rollScore[index - '4'] === 10) {
    this.addBonus(index);
  } else if (this._rollScore[index - '4'] +
    this._rollScore[index - '3'] === 10) {
      this.addBonus(index);
  }
};

Score.prototype.addBonus = function(index) {
  let bonus = 0;

  // index -5 checks for roll 2 in a game
  if (this._rollScore[index - '6'] === 10 ||
    this._rollScore[index - '5'] === 10) {
      if (this._rollScore[index - '4'] === 10) {
       bonus = this._rollScore[index - '2']
       // + this._rollScore[index-'1'];
       this._totalScore.push(bonus);
       this._bonus.push(bonus);
      }
  }

  // index -3 checks for roll 2 in a game
  if (this._rollScore[index - '4'] === 10 ||
    this._rollScore[index - '3'] === 10) {
      if (this._rollScore[index - '2'] === 10) {
        bonus = 10;
      } else {
        bonus = 0;
        bonus = this._rollScore[index - '2'] + this._rollScore[index - '1'];
      }
    } else {
      // if only 1x 10
      bonus = 0;
      bonus = this._rollScore[index - '2'];
  }

  // frame 10 logic
  if (this._rollScore[index - '1'] === 10) {
    if (this._rollScore[index - '2'] === 10) {
      if (this._rollScore[index - '3'] === 10) {
       bonus = 5;
       // this._rollScore[index-'2']
       // + this._rollScore[index-'1'];
       this._totalScore.push(bonus);
       this._bonus.push(bonus);
     }
    }
  }
  this._totalScore.push(bonus);
  this._bonus.push(bonus);
  return bonus;
};


Score.prototype.getBonus = function() {
  return this._bonus;
};

Score.prototype.resetScore = function() {
  this._totalScore = [];
  this._rollScore = [];
};
