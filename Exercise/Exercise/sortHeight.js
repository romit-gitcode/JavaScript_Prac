const arr = [-1, 150, 190, 170, -1, -1, 160, 180]
const sortByHeight = (heights)=>{
    const index_of_tree = [];
    for(let i=0;i<heights.length;i++){
        if (heights[i]===-1){
            index_of_tree.push(i)
        }
    }
    // console.log(index_of_tree)
    const height = heights.sort()
    height.splice(0,index_of_tree.length)
    // console.log(height)
    for(let j=0;j<index_of_tree.length;j++){
        height.splice(index_of_tree[j], 0, -1)
    }
    console.log(height)
}
sortByHeight(arr)