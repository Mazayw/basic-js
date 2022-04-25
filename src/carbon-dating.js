const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

/*
Age must be integer. Age must be rounded up (ceiling). In case of wrong input parameter type or inadequate activity value or absence of argument function must return false.

For example:

dateSample('1') => 22387 (or 22392 depending on formula used)

dateSample('WOOT!') => false

Write your code in src/carbon-dating.js.
*/
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string' || +sampleActivity <= 0 || +sampleActivity >= MODERN_ACTIVITY || isNaN(+sampleActivity)) {
    return false;
  } else {
    const AGE = Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(AGE);
  }
}

module.exports = {
  dateSample
};
