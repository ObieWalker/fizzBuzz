import { assert } from 'chai';

import  FizzBuzz  from '../fizzBuzz';


describe('check if number matches to fizz, buzz or fizzbuzz', () => {
  it('should return fizz when the input is 6', () => {
    assert.deepEqual(FizzBuzz(6), 'fizz')
  });
  it('should return fizz when the input is 10', () => {
    assert.deepEqual(FizzBuzz(10), 'buzz')
  });
  it('should return fizzbuzz when the input is a multiple of 3 and 5', () => {
    assert.deepEqual(FizzBuzz(15), 'FizzBuzz')
  });
  it('should ask for a number if input is a string', () => {
   assert.deepEqual(FizzBuzz('safd'), 'Please enter a number')
  });
  it('should request an integer when the user enters a float', () => {
    assert.deepEqual(FizzBuzz(1.4), 'Please enter a number')
  })
  it('should return a message when the input is less than 1', () => {
    assert.deepEqual(FizzBuzz(-1), 'Number can only be positive')
  });
  it('should return the input when the user enters a nummber that is neither a multiple of 3 or 5', () => {
    assert.deepEqual(FizzBuzz(44), 44)
  });
  it('should return a message the input is null or undefined', () => {
    assert.deepEqual(FizzBuzz(" "), 'Please enter a number')
  });
})