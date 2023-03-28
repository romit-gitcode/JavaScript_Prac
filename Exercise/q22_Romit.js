const closeNums = (nums) =>{
    let map = {}
    const a = [...nums]
    let res = {};
    for(let i=0;i<a.length;i++){
        let char = a[i]
        if(map[char]){
            map[char] = i - map[char]
            // return map[char]
        }
        res[char] = map[char]
        map[char] = i
    }
    return res;
}
const exists = (obj, diff)=>{
    let output = {}
    for(let i=0;i<Object.keys(obj).length;i++){
        let c = Object.keys(obj)[i]
        // console.log(c)
        if(obj[c]==diff){
            output[c] = obj[c]
        }
    }
    console.log(output)
}

const inp =  [0, 1, 2, 3, 5, 2, 3, 0];
const obj = closeNums(inp);
console.log(obj)
exists(obj,3)
