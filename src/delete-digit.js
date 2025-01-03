const { NotImplementedError } = require('../extensions/index.js');

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
  let str = String(n).split('');
  let maxNum = 0;
  let index = 0;
  for (let i = 0; index < str.length; ) {
    let currentNum = '';
    for (let j = 0; j < str.length; j++) {
      if (j != index) {
        currentNum += str[j];
      }
    }
    if (+currentNum > +maxNum) maxNum = +currentNum;
    index++;
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
