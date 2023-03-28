var arr = [1,2,1]
arr.map((element)=>{
    if (element==1){
        const index = arr.indexOf(element);
        arr[index] = 3
    }
})
console.log(arr)