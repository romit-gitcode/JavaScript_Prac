function validParenthesis(string){
    const leftParenthesis=[]

    for(let i=0; i<string.length; i++){
        if(string[i]==='(' ||string[i]==='{' ||string[i]==='[' ){
            leftParenthesis.push(string[i])
        }
        else if(string[i]===')' && leftParenthesis!==0 && leftParenthesis[leftParenthesis.length-1]==='('){
            leftParenthesis.pop()
        }
        else if(string[i]==='}' && leftParenthesis!==0 && leftParenthesis[leftParenthesis.length-1]==='{'){
            leftParenthesis.pop()
        }
        else if(string[i]===']' && leftParenthesis!==0 && leftParenthesis[leftParenthesis.length-1]==='['){
            leftParenthesis.pop()
        }
        else return false
    }
    return true
}

console.log(validParenthesis("(({]))"))