/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let exactlyStr = String(str);

  if (!options) {
    return exactlyStr;
  }

  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  if (typeof addition !== 'undefined') {
    const additionStr = String(addition); // convert to string type
    const addArray = []; // array with additions

    for (let i = 0; i < additionRepeatTimes; i += 1) {
      addArray.push(additionStr);
    }
    exactlyStr += addArray.join(additionSeparator);
  }

  let result = exactlyStr;
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes - 1; i += 1) {
      result += separator + exactlyStr;
    }
  }

  return result;
}

module.exports = {
  repeater
};
