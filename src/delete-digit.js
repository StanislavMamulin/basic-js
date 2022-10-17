/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  const numArr = String(n).split('');

  for (let i = 0; i < numArr.length; i += 1) {
    let tmpArr = [...numArr];
    tmpArr.splice(i, 1)
    const num = parseInt(tmpArr.join(''), 10);

    if (num > maxNum) {
      maxNum = num;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
