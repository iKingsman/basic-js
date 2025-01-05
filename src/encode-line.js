const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let symbol = str[0];
  let countRepeats = 0;
  for (let i = 0; i <= str.length; i++) {
    if (symbol === str[i]) {
      countRepeats++;
    } else {
      encodedStr += `${countRepeats > 1 ? `${countRepeats}${symbol}` : symbol}`;
      symbol = str[i];
      countRepeats = 1;
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine
};
