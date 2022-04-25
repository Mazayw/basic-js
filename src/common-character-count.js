const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;
  let count = 0;

  let min, max;
  if (s1.length > s1.length) {
    max = s1.split('');
    min = s2.split('');
  } else {
    max = s2.split('');
    min = s1.split('');
  }
  min.forEach(elem => {
    if (max.includes(elem)) {
      count++;
      max[max.indexOf(elem)] = 'duplicate';
    }
  });
  return count;

}

module.exports = {
  getCommonCharacterCount
};
