let inp =  ["abc", "ded","llllll","a"]; 

function addBorder(a) {
    let top = '*'.repeat(a[0].length);
    a.unshift(top);
    let maxLength=0;
    for(ele of a){
        maxLength = Math.max(maxLength, ele.length)
    }
    maxLength += 2;
    // console.log(maxLength)
    for(let i = 0; i < a.length; i++){
        let diff = maxLength - a[i].length
        if (diff % 2 === 0){ a[i] = "*".repeat(diff / 2) + a[i] + "*".repeat(diff / 2)}
        else {
            diff -= 1
            // console.log(diff)
            a[i] = ("*".repeat(diff / 2) + a[i] + "*".repeat(diff / 2)) + "*"
        }
    }

    let bottom = '*'.repeat(a[1].length);
    a.push(bottom);
 
    return a;
}

const pattern = addBorder(inp)
console.log(pattern)



