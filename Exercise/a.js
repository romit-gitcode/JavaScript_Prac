// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//     myPromise().then(res => console.log(res));
//     console.log('second');
// }

// async function secondFunction() {
//     console.log(await myPromise());
//     console.log('second');
// }

// firstFunction();
// secondFunction();

const paradise = (a)=>{
    let island = 0;
    for (let i = 0; i < a.length; i++) {
        for(let j = 0; j< a[i].length; j++){
            // left
            if(a[i][j]===1 && a[i][j-1]===1 && j>0){
                a[i][j] = (island + 1)+""
            }
            // top
            else if(a[i][j]===1 && a[i-1][j]===1 && i>0){
                a[i][j] = (island + 1)+""
            }
        }    
    }
    console.log(island);
}

const matrix = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
    ]

paradise(matrix)