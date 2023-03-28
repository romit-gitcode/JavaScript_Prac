function spiralMatrixImproved(matrix) {
    let i1 = 0,
        i2 = matrix.length - 1,
        j1 = 0,
        j2 = matrix[0].length - 1;
    let row = 0, colm = 0;
    let array = []
    while (!(i1 > i2 && j1 > j2)) {
        while (colm < j2 + 1) {
            array.push(matrix[row][colm])
            colm++;
        }
        colm--;
        if (array.length === matrix.length * matrix[0].length) break
        row++
        while (row < i2) {
            array.push(matrix[row][colm])
            row++;
        }

        if (array.length === matrix.length * matrix[0].length) break

        while (colm >= j1) {
            array.push(matrix[row][colm])
            colm--;
        }
        colm++;
        if (array.length === matrix.length * matrix[0].length) break

        row--;
        while (row > i1) {
            array.push(matrix[row][colm])
            row--;
        }
        row++;
        colm++;

        i1++;
        j2--;
        i2--;
        j1++;
    }
    return array
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
let matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]
console.log(spiralMatrixImproved(matrix))
console.log(spiralMatrixImproved(matrix1))
console.log(spiralMatrixImproved(matrix2))