// let grid = [
//   [1, 1, 1, 1, 0],
//   [1, 1, 0, 1, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
// ];

// let grid = [
//     [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
//   ];
  
  function noOfIslands(mat) {
    let count = "a";
    let firstFlag = true;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        // first encount of 1
        if (mat[i][j] == 1 && firstFlag == true) {
          firstFlag = false;
          mat[i][j] = count;
        } else if (mat[i][j] == 1 && j > 0 && mat[i][j - 1] == count) {
          //left
          mat[i][j] = mat[i][j - 1];
        } else if (mat[i][j] == 1 && i > 0 && mat[i - 1][j] == count) {
          //above
          mat[i][j] = mat[i - 1][j];
        } else if (mat[i][j] == 1) {
          mat[i][j] = count = String.fromCharCode(count.charCodeAt() + 1);
        }
      }
    }
    console.log(mat);
    return count.charCodeAt() - 96;
  }
  
  console.log(noOfIslands(grid));
  