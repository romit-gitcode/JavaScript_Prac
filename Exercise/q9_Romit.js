const inp = ["aba", "aa", "ad", "vcd", "aba"]
const maximum = (a) =>{
    let max = 0;
    for (ele of a){
        if(ele.length>max){
            max=ele.length
        } 
    }
    return max
}
 const max = maximum(inp)
//  console.log(max)
const max_arr = inp.filter((ele) => ele.length==max)
console.log(max_arr)