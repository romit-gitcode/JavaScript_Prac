const findLongestSubstring = (str) => {
    let ret = 0;
    let seen = {};
    let i = 0;
  
    for (let j = 0; j < str.length; j++) {
      let char = str[j];
      if (seen[char]) {
        i = Math.max(i, seen[char]);
      }
      ret = Math.max(ret, j - i + 1);
      seen[char] = j + 1;
    }
    console.log(ret);
  };
  
  findLongestSubstring("romitpatel");
  