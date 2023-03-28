const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

const input = 'crazy';
const inp_split = input.split('')
console.log(inp_split)
let output = []

const shifted_out = inp_split.map((element)=>{
    var char_code = element.charCodeAt() + 1;
    if(char_code == 123){
        char_code = 97;
        output.push(String.fromCharCode(char_code))
    }
    else{
        output.push(String.fromCharCode(char_code))
    }
})

console.log(output)
