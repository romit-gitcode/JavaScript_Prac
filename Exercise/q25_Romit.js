let n = 6;
let edges = [
  [0, 1],
  [1, 2],
  [3, 4]
];

// let edges = [
//   [0, 1],
//   [1, 2],
//   [3, 4],
//   [2, 3],
// ];

function numberOfConnectedComponents(edges, n) {
    let adj = new Map();
    for (let i = 0; i < n; i++) {
      adj.set(i, []);
    }
    // console.log(adj)
    for (let i = 0; i < edges.length; i++) {
      adj.get(edges[i][0]).push(edges[i][1]);
      adj.get(edges[i][1]).push(edges[i][0]);
    }
  
    console.log(adj);
  
    let visited = Array(n).fill(false);
    console.log(visited);
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
        count++;
        dfs(adj, i, visited);
      }
    }
    console.log(visited);
    return count;
  }
  
  function dfs(adj, index, visited) {
    visited[index] = true;
    for (let j of adj.get(index)) {
      if (visited[j] === false) {
        dfs(adj, j, visited);
      }
    }
  }
  console.time('label');
  console.log(numberOfConnectedComponents(edges, n));
  console.timeEnd('label');
  