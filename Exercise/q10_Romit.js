const str1 = "aabcc";
const str2 = "adcaa";

let freq1 = {}
let freq2 = {}
let freq = {}
const commonCharCount = (str1,str2) =>{
    for(let i=0;i<str1.length;i++){
        if(!freq1[str1[i]]){
            freq1[str1[i]]=1
        }
        else{
            freq1[str1[i]]+=1
        }
    }
    for(let i=0;i<str2.length;i++){
        if(!freq2[str2[i]]){
            freq2[str2[i]]=1
        }
        else{
            freq2[str2[i]]+=1
        }
    }
    for (key in freq1){
        if(freq2[key]){
            freq[key] = Math.min(freq1[key],freq2[key])
        }
    }
    console.log(freq)
}

commonCharCount(str1,str2)