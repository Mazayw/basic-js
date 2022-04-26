const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");

  const arrMod = arr.slice();

  arrMod.forEach((el, index) => {
    switch (el) {
      case '--discard-next':
        if (arrMod[index + 1]) {
          arrMod[index + 1] = 'delete'; arrMod[index] = 'delete';
        } else {
          arrMod[index] = 'delete';
        }
        break;
      case '--discard-prev':
        if (arrMod[index - 1]) {
          arrMod[index - 1] = 'delete'; arrMod[index] = 'delete';
        } else {
          arrMod[index] = 'delete';
        }
        break;
      case '--double-next':
        arrMod[index + 1] ? arrMod.splice(index, 1, arrMod[index + 1]) : arrMod.splice(index, 1);
        break;
      case '--double-prev':
        arrMod[index - 1] ? arrMod.splice(index, 1, arrMod[index - 1]) : arrMod.splice(index, 1);
        break;
    }

  });

  return arrMod.filter(el => el !== "delete");
}

module.exports = {
  transform
};
