const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str += '.';
  const strArr = str.split('');
  let prev = strArr[0];
  let result = '';
  let count = 0;

  strArr.forEach(elem => {
    if (prev === elem) {
      count++;
    } else {
      result += count > 1 ? count + prev : prev;
      count = 1;
      prev = elem;
    }

  });
  return result;
}


module.exports = {
  encodeLine
};
