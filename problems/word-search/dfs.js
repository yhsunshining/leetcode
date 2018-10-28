/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (var i = 0, len_col = board.length; i < len_col; i++) {
    for (let j = 0, len_row = board[0].length; j < len_row; j++) {
      debugger;
      if (solve(board, word, 0, i, j)) {
        return true;
      }
    }
  }
  return false;
};

function solve(board, word, index, n, m) {
  if (index == word.length) {
    return true;
  }
  if (
    n < 0 ||
    n >= board.length ||
    m < 0 ||
    m >= board[0].length ||
    board[n][m] == null
  ) {
    return false;
  }
  if (board[n][m] !== word[index]) {
    return false;
  }
  let cache = board[n][m];
  board[n][m] = null;
  let find =
    solve(board, word, index + 1, n - 1, m) ||
    solve(board, word, index + 1, n + 1, m) ||
    solve(board, word, index + 1, n, m - 1) ||
    solve(board, word, index + 1, n, m + 1);
  board[n][m] = cache;
  return find;
}
