const pascal = (n) => {
    let a = [];
    for(let i=0;i<n;i++){
        let temp = [];
        for(let j=0; j<=i; j++){
            if(j==0 || j==i){
                temp.push(1);
            }
            else{
                temp.push(a[i-1][j-1]+a[i-1][j])
            }
        }
        a.push(temp)
    }
    console.log(a)
}

pascal(5)