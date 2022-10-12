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
function dateSample(sampleActivity) {
  // check for wrong input parameter type or absence of argument
  if (
    typeof sampleActivity == 'undefined' ||
    typeof sampleActivity != 'string'
  ) {
    return false;
  }

  const activity = parseFloat(sampleActivity, 10);
  
  // check for inadequate activity value
  if (
    isNaN(activity) ||
    activity <= 0 ||
    activity > MODERN_ACTIVITY
  ) {
    return false;
  }

  const ln2 = 0.693; // an approximation of the natural logarithm of two
  const k = ln2 / HALF_LIFE_PERIOD; // the radioactive decay constant
  const age = Math.log(MODERN_ACTIVITY/activity) / k;

  return Math.ceil(age);
}

module.exports = {
  dateSample
};
