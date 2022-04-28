const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const rowList = [];
  let sum = 0;
  matrix.forEach(el => {
    el.forEach((eli, index) => {
      console.log('roeList', rowList);
      if (!rowList.includes(index)) {
        console.log('sum', eli);
        if (eli == 0) rowList.push(index);
        sum += eli;
      }
    });
  });

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
