const matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]]

const sum = (a)=>{
    let cost = 0;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            if((i==0)||(i>0 & a[i-1][j]!=0)){
                cost += a[i][j]
            }
        }
    }
    console.log(cost)
}

sum(matrix)