function getNumberOfWays(N,Coins)
{
        let ways = new Array(N + 1);
         for(let i=0;i<N+1;i++)
        {
            ways[i]=0;
        }
        ways[0] = 1;
        for (let i = 0; i < Coins.length; i++) {
            for (let j = 0; j < ways.length; j++) {
                if (Coins[i] <= j) {
                    ways[j] += ways[(j - Coins[i])];
                }
            }
        }
        return ways[N];
}
let Coins=[1, 5, 10];
console.log(getNumberOfWays(12, Coins));
    