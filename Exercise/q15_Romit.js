const increasing_seq = (a)=>{
    const temp = [...a];
    const diff = [];
    var sum=0;
    for(let i=0;i<a.length-1;i++){
        if(a[i]>=a[i+1]){
            a[i+1]=a[i]+1
        }
    }
    for(let j=0;j<a.length;j++){
        // if(a[j]==temp[j]){
        //     diff.push(a[j])
        // }
        if(a[j]!=temp[j]){
            let d = a[j]-temp[j]
            diff.push(d)
        }
    }
    for (let k = 0; k < diff.length; k++) {
        sum += diff[k]        
    }
    console.log("New Array: " + a + " Difference is: " + sum)
}

const a = [1,1,1,1]
increasing_seq(a)
