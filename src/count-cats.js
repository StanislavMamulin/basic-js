const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCounter = 0;
  const cat = '^^';

  for (const level1 of matrix) {
    if (Array.isArray) {
      for (const maybeCat of level1) {
        if (maybeCat === cat) {
          catCounter += 1;
        }
      }
    }
  }

  return catCounter;
}

module.exports = {
  countCats
};
