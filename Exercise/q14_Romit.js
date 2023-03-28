let arr = [5, 3, 6, 7, 9];

function avoidobstacles(arr) {
    
    let set = new Set();
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
        max = Math.max(max, arr[i]);
    }

    for (let i = 1; i <= max; i++) {
        let j;
        for (j = i; j <=max; j=j+i) {
            if(set.has(j)) break;
        }
        if(j > max) return i;
        
    }
    return max+1;
}

console.log(avoidobstacles(arr));