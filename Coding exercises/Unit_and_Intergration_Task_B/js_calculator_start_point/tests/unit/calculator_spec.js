var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('must add 1 to previousTotal of 4', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    expected = 5;
    actual = calculator.runningTotal;
    assert.equal(expected, actual);
  })

  it('must subtract 4 from previousTotal of 7', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    expected = 3;
    actual = calculator.runningTotal;
    assert.equal(expected, actual);
  })

  it('must multiply 3 by previousTotal of 5', function () {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    expected = 15;
    actual = calculator.runningTotal;
    assert.equal(expected, actual);
  })

  it('must divide previousTotal 21 by 7', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    expected = 3;
    actual = calculator.runningTotal;
    assert.equal(expected, actual);
  })

  it('should be able to concatinate multiple number button clicks', function () {
    calculator.numberClick(7);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 71);
  })

  it('should be able to chain multiple operators together', function () {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6)
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 9);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  })

});
