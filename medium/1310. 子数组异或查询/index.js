/**
 * 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
 * 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。
 * 并返回一个包含给定查询 queries 所有结果的数组。
 * 输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
 * 输出：[2,7,14,8] 
 */

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  // 前缀异或数组
  const n = arr.length;
  const xors = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    xors[i + 1] = xors[i] ^ arr[i];
  }
  const m = queries.length;
  const ans = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1];
  }
  return ans;
  // 时间复杂度 O(m*n)
  // let result = [];
  // for (let query of queries) {
  //   let [ start, end ] = query;
  //   let temp = 0;
  //   do {
  //     temp ^= arr[start];
  //     start++;
  //   } while (start <= end);
  //   result.push(temp);
  // }
  // console.log(result);
  // return result;
};

xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]); // [ 2, 7, 14, 8 ]
xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]]); // [ 8, 0, 4, 4 ]

