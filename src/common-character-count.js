const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countCommonCharacters = 0;
  s2 = s2.split('');
  s1.split('').map(item => {
    const index = s2.indexOf(item);
    if (index !== -1) {
      countCommonCharacters++;
      s2[index] = '';
    }
  });
  return countCommonCharacters;
}

module.exports = {
  getCommonCharacterCount
};
