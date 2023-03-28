const minesweeper=(m) =>{
    let newMatrix = []
    for (let i = 0; i < m.length; i++) {
        newMatrix.push([])
        for (let j = 0; j < m[i].length; j++) {
            let count = 0;
            if (m[i][j]) {
                newMatrix[i].push(1)
                continue
            }
            else {
                if (i - 1 >= 0 && j - 1 >= 0 && m[i - 1][j - 1]) {
                    count++
                    
                }; 
                if (i - 1 >= 0 && j + 1 < m[i].length && m[i - 1][j + 1]) {
                    count++
                }; 
                if (i - 1 >= 0 && m[i - 1][j]) {
                    count++
                }; 
                if (j - 1 >= 0 && m[i][j - 1]) {
                    count++
                }; 
                if (j + 1 < m[i].length && m[i][j + 1]) {
                    count++
                }; 
                if (i + 1 < m.length && m[i + 1][j]) {
                    count++
                }; 
                if (i + 1 < m.length && j - 1 >= 0 && m[i + 1][j - 1]) {
                    count++
                }; 
                if (i + 1 < m.length && j + 1 < m[i].length && m[i + 1][j + 1]) {
                    count++
                }; 
                newMatrix[i].push(count)
            }
        }
    }
    console.log(newMatrix)
}

let matrix = [[true, false, false, true, false, false],
[false, true, false, true, false, false],
[false, false, false, true, false, false],
[true, false, false, true, false, false],
[false, true, false, true, false, false],
[false, false, false, true, false, false]]

    // [[true, false, false],
    // [false, true, false],
    // [false, false, false]]

minesweeper(matrix)