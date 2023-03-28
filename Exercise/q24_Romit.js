// const paradise = (a)=>{
//     let island = 0;
//     for (let i = 0; i < a.length; i++) {
//         for(let j = 0; j < a[i].length; j++){
//             // left
//             if(a[i][j]===1 && j>0 && a[i][j-1]===1){
//                 a[i][j] = island + 1
//             }
//             // top
//             if(a[i][j]===1 && i>0 && a[i-1][j]===1){
//                 a[i][j] = island + 1
//             }
//         }    
//     }
//     console.log(island);
// }

// const matrix = [
//     [1,1,1,1,0],
//     [1,1,0,1,0],
//     [1,1,0,0,0],
//     [0,0,0,0,0]
//     ]

// paradise(matrix)
function island(grid){
    let rows = grid.length
    let cols = grid[0].length
    let count = 0;

    const dfs = (row,col) =>{
        if(row<0 || row == rows || col<0 || col == cols){
            return
        }
        if (grid[row][col]!=1){
            return
        }
        grid[row][col]= 'V'
    
        dfs(row-1,col)
        dfs(row+1,col)
        dfs(row,col-1)
        dfs(row,col+1)
    }
    for(let row=0;row<rows;row++){
        for(let col=0;col<cols;col++){
            if(grid[row][col]==1){
                dfs(row, col)
                count +=1;
            }
        }
    }
    console.log(count)
}

const matrix = [
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0, 1, 1],
    [0, 0, 0, 1, 1, 1, 1]
]

console.time("s");

island(matrix)
console.timeEnd("s");