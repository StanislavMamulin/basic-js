function getNameOfSeason(month) {
  if (month === 11 || month >=0 && month <= 1) {
    return 'winter';
  } else if (month >= 2 && month <=4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  }
}

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }

  if (
    !(Object.prototype.toString.call(date) === "[object Date]") ||
    !(typeof date.getMonth === 'function') ||
    date.hasOwnProperty('toString')
  ) {
    throw Error("Invalid date!");
  }
  
  return getNameOfSeason(date.getMonth());
}

module.exports = {
  getSeason
};
