/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const SEC_IN_HOUR = 3600;

  const turns = parseInt(Math.pow(2, disksNumber) - 1, 10);
  const seconds = Math.floor(turns * SEC_IN_HOUR / turnsSpeed);

  return {
    turns,
    seconds,
  }
}

module.exports = {
  calculateHanoi
};
