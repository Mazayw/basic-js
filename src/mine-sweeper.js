const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const result = [];
  matrix.forEach((el, index) => {
    result.push([]);
    el.forEach(() => {
      result[index].push(0);
    });
  });


  function checker(arr, i, j) {
    const changeValues = [[i, (j + 1)], [i, (j - 1)], [(i - 1), j], [(i + 1), j], [(i - 1), (j - 1)], [(i - 1), (j + 1)], [(i + 1), (j - 1)], [(i + 1), (j + 1)]];

    changeValues.forEach(el => {
      if (el[0] >= 0 && el[1] >= 0 && el[0] <= arr.length - 1 && el[1] <= arr[0].length - 1) {
        arr[el[0]][el[1]]++;
      }
    });
  }
  matrix.forEach((elY, indexY) => {
    elY.forEach((elX, indexX) => {
      if (elX === true) checker(result, indexY, indexX);
    });
  });
  return result;
}

module.exports = {
  minesweeper
};
