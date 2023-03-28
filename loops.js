// for in loops through key of object
// const a ={
//     name: "Romit",
//     Age: 21
// }
// for(let key in a){
//     console.log("key is :- " + key + " value is :- " + a[key]);
// }

// //for of loop works on the values and it always require an iterable in its loop i.e (list,string,array etc)
// let x=['Romit', 'Darshan']
// for(let b of x){
//     console.log(b);
// } 

const marks={
    Romit: 100,
    Darshan: 0,
    Krinal: -100
}
let b = Object.keys(marks)
console.log(b);
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

let p=10;
let q=20;
let r=30;

let mean = (p,q,r) => {
    return (p+q+r)/3
}
console.log(mean(p,q,r))

const num = [1, 2, 3, 4, 5]
num.forEach((element)=>{
    console.log(element*element);
})
