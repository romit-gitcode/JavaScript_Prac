let inp = [6, 2, 3, 15, 10]
const count = (inp)=>{
    let arr = inp.sort((a,b)=>a-b);
    let missing_val = [];
    console.log(arr)
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]-arr[i]!=1){
            let diff = arr[i+1]-arr[i] - 1;
            for(let j=1;j<=diff;j++){
                missing_val.push(arr[i]+j)
            }
        }

    }
    console.log("Missing Values: " + missing_val + " & Count of Missing Values: " + missing_val.length)
}

count(inp)