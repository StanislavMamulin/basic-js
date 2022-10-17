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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  let resultArray = [...arr];
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      resultArray[i + 1] = undefined;
    } else if (arr[i] === '--discard-prev') {
      const prevElement = resultArray[i - 1];
      if (prevElement && !controls.includes(prevElement)) {
        resultArray[i - 1] = undefined;
      }
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        resultArray.splice(i, 2, arr[i+1], arr[i+1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0 && resultArray[i-1]) {
        resultArray.splice(i - 1, 2, arr[i-1], arr[i-1]);
      }
    }
  }

  resultArray = resultArray.filter(el => el && !controls.includes(el));

  return resultArray;
}

module.exports = {
  transform
};
