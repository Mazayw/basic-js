const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr) && arr.filter(el => Array.isArray(el)).length > 0) {
      return 1 + this.calculateDepth([].concat(...arr.filter(el => Array.isArray(el))));
    } else {
      return 1;
    }

  }
}

module.exports = {
  DepthCalculator
};
/*
if (Array.isArray(arr)) {
      arr.forEach(el => {
        if (Array.isArray(el)) {
          return 1 + this.calculateDepth(el);
        } else {
          return 1;
        }
      });

*/
