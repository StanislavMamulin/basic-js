/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const secretName = members.filter(some => typeof some == 'string')
    .map(name => {
      let firstLetter = name.trim();
      return firstLetter[0].toUpperCase();
    })
    .sort()
    .join('')

  return secretName;
}

module.exports = {
  createDreamTeam
};
