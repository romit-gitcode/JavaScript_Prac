const inp = "foo(bar)baz(blim)";
let temp = inp.split("(") 
temp = temp.toString()
let final = temp.split(")")
// console.log(final)
const rev = (a)=>{
    let temp=[];
    for(let i=0; i<a.length-1; i++){
        let t0 = [a[i].split(",")[0]]
        temp.push(t0.toString())
        let t = [a[i].split(",")[1]]
        let t2 = (t.toString().split("").reverse()).join("")
        temp.push(t2)
    }
    console.log(temp.join(""))
}
console.time('r')
rev(final)
console.timeEnd('r')

