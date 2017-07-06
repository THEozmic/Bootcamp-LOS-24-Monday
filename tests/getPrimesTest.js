const chai = require('chai');

const getPrimes = require('../js/getPrimes');
const assert = chai.assert;

let getPrimesReturnVal;
describe ('getPrimes', () => {
  
  it ('should return array', () => {
    getPrimesReturnVal = getPrimes(5);
    assert.isArray(getPrimesReturnVal);
  });

  it ('should return an array that ends with value of "n"', () => {
      let n = 5;
      getPrimesReturnVal = getPrimes(n);
      let lengthOfReturnVal = getPrimesReturnVal.length;
      assert(getPrimesReturnVal[lengthOfReturnVal - 1] == n);
  });

  it ('should not accept empty params', () => {
      assert(getPrimes() == false);
  });

  it ('should only accept integer value', () => {
      assert(getPrimes("a") == false);
  });

  it ('should return an array that starts with "2"', () => {
      getPrimesReturnVal = getPrimes(5);
      assert.equal(getPrimesReturnVal[0], 2);
  });

  it ('should have returned array be prime numbers of "n"', () => {
      getPrimesReturnVal = getPrimes(5);
      let expectedVal = [2, 3, 5] //array of 5's prime numbers
      for (let i = 0; i < expectedVal.length; i++) {
        assert((getPrimesReturnVal[i] == expectedVal[i]) && (expectedVal.length == getPrimesReturnVal.length), "expected getPrimes to return prime numbers of 5")
      }
  });

  it ('should be of type function', () => {
    assert.isFunction(getPrimes);
  });

  it ('should return false if "n" < 2', () => {
    assert(getPrimes(0) == false);
  });

  it ('should have every number in array returned be positive', () => {
      getPrimesReturnVal = getPrimes(5);
      for (let i in getPrimesReturnVal) {
          assert(i > -1);
      }
  });

  it ('should not return undefined', () => {
      getPrimesReturnVal = getPrimes(5);
      assert.isDefined(getPrimesReturnVal);
  })

});