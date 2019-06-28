/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, caclIslandArea(i, j, grid));
    }
  }
  return max;
};

function caclIslandArea(i, j, grid) {
  if (
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[0].length &&
    grid[i][j] == 1
  ) {
    grid[i][j] = 0;
    return (
      1 +
      caclIslandArea(i - 1, j, grid) +
      caclIslandArea(i + 1, j, grid) +
      caclIslandArea(i, j - 1, grid) +
      caclIslandArea(i, j + 1, grid)
    );
  } else {
    return 0;
  }
}
