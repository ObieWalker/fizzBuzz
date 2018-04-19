/* export function */

const FizzBuzz = function(input) {
    if (input % 3 === 0 ) {
        return 'fizz'
    } else if (input % 5 === 0) {
        return 'buzz'
    } else if (input === null || undefined) {
        return 'Please enter a number'
    } else if (typeof input === 'float') {
        return 'Please enter a number'
    }else if (typeof input !== 'number') {
      return 'Please enter a number';
    } else if (input < 1 ) {
      return 'Number can only be positive'
    } else if (input % 3 !== 0 && input % 5 !== 0) {
      return input;
    } else if (input % 3 === 0 && input % 5 === 0) {
      return 'Fizzbuzz';
    }
  }
  
  export default FizzBuzz;