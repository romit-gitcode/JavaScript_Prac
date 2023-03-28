inputArray = [3, 6, -2, -5, 7, 3]
max=0;
const adjacentElementsProduct= (inputArray)=>{
    const length = inputArray.length
    for(let i = 0; i<length; i++){
        let mul = inputArray[i]*inputArray[i+1]
        if(mul>max){
            max=mul
            var element1 = inputArray[i];
            var element2 = inputArray[i+1];
        }
    }
    console.log("Maximum Product: " + max + " Elements are: " + element1 + " and " + element2)
}

adjacentElementsProduct(inputArray)
