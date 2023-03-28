let x = Math.floor(Math.random()*100);
console.log(x);
let guess = prompt("Guess the number: ");
let score = 0;
while(guess!=x){
    guess = prompt("Guess the number: ");
    score +=1;
}
console.log(score)
