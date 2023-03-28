// function demo (x,callback){
//     console.log(x)
//     setTimeout(cb,3000)

// }
// const cb = ()=>{
//     console.log("Done")
// }
// demo(5,cb)

// ====promise
console.log("Start")

const abc = new Promise((resolve,reject)=>{
    console.log("Before Resolve");
    let i = 0;
    while (i < 10000000) {i++}
    resolve(2);
    console.log("After Resolve")
})

abc.then((res)=>{
    console.log(res)
})

console.log("End")
