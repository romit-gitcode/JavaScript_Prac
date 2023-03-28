const centuryFromYear = (year)=>{
    const first_two = Math.floor(year/100);
    if(year<0){
        console.log("Invalid Input");
    }
    else if (year%100==0){
        console.log("It is: " + first_two + "th Century");
    }
    else {
        const century = first_two + 1;
        console.log("It is: " + century + "th Century");
    }
}

centuryFromYear(-1)