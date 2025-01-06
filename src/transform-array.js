const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const finalArr = [];
  const doubleNext = "--double-next";
  const discardNext = "--discard-next";
  const doublePrev = "--double-prev";
  const discardPrev = "--discard-prev";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === doubleNext) {
      if (i !== arr.length - 1) {
        finalArr.push(arr[i + 1], arr[i + 1]);
        i++;
      }
    } else if (arr[i] === discardNext) i += 2;
    else if (arr[i] === doublePrev) {
      if (i !== 0) finalArr.push(arr[i - 1]);
    }
    else if (arr[i] === discardPrev) finalArr.pop();
    else finalArr.push(arr[i]);
  }
  return finalArr;
}

module.exports = {
  transform
};
