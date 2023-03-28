const freq = {}
const can_be_palindrom = (a)=>{
    var count=0;
    let key = [];
    if(a.length%2==0){
        for (let i = 0; i < a.length; i++) {
            if(!freq[a[i]]){
                freq[a[i]]=1
            }
            else{
                freq[a[i]]+=1
            }
        }
        for (keys in freq){
            if(!(freq[keys]%2==0)){
               console.log("not palindrom") 
               return
            }
        }
        console.log("Even Palindrom Possible")
    }
    else{
        for (let i = 0; i < a.length; i++) {
            if(!freq[a[i]]){
                freq[a[i]]=1
            }
            else{
                freq[a[i]]+=1
            }
        }
        for (keys in freq){
            if(freq[keys]===1){
                count+=1
                key.push(keys)
            }
        }
        if(count>1){
            console.log("not possible");
        }
        else{
            console.log("Odd Palindrom Possible")
        }
    }
}
const inp = "aabbccc"
console.time("First");
can_be_palindrom(inp)
console.timeEnd("First");
