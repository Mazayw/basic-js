const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let maxNumber = 0;
  let nArray = n.toString().split('');
  for (let i = 0; i < nArray.length; i++) {
    const tempArray = nArray.slice();
    tempArray.splice(i, 1);
    const number = Number(tempArray.join(''));
    if (number >= maxNumber) maxNumber = number;
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
