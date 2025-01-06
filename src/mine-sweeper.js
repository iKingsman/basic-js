const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const boardRows = matrix.length;
  const boardColumns = matrix[0].length;
  const board = Array.from({ length: boardRows }, () => Array(boardColumns).fill(0));
  for (let row = 0; row < boardRows; row++) {
    for (let column = 0; column < boardColumns; column++) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (matrix[row][column]) {
            const nextRow = row + i;
            const nextColumn = column + j;
            if (nextRow >= 0 && nextRow < boardRows && nextColumn >= 0
              && nextColumn < boardColumns
              && (nextRow !== row || nextColumn !== column)) {
              board[nextRow][nextColumn]++;
            }
          }
        }
      }
    }
  }
  return board;
}

module.exports = {
  minesweeper
};
