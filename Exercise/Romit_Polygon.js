const polygon_area = (n)=>{
    const area = (n*(2*(n-1))) +1;
    return area;
}

let n=5;
const a= polygon_area(n)
console.log(a)