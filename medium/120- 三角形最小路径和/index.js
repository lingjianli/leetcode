// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let height = triangle.length
  let dp = new Array(height)
  for(let i = 0; i < height; i++) {
    dp[i] = new Array(height)
  }
  dp[0][0] = triangle[0][0]
  for(let i = 1; i < height; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
    for(let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
    }
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
  }
  return Math.min(...dp[height - 1])
};

console.log(minimumTotal(triangle))
