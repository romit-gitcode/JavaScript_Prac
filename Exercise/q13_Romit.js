const inp1 = [1, 2 ,3, 4]
const inp2 = [1, 2, 4, 3]

const similar = (inp1,inp2)=>{
    let index = [];
    let temp;
    if(inp1.length === inp2.length){
        for(let i=0;i<inp1.length;i++){
            if(inp1[i]!=inp2[i]){
                index.push(i);
            }
        }
        if(index.length!=2){
            return false
        }
        else{
            temp = inp2[index[0]];
            inp2[index[0]] = inp2[index[1]]
            inp2[index[1]]=temp
            for(let j=0;j<inp1.length;j++){
                if(inp1[j]!=inp2[j]){
                    return false;
                }
                else{
                    return true;
                }
            }
        }
    }
    else{
        return false;
    }
}

console.log(similar(inp1,inp2))
