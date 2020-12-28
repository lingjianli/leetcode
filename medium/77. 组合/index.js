/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const temp = []
  const ans =[]
  for (let i = 1; i <= k; i++) {
    temp.push(i)
  }
  temp.push(n + 1) // 哨兵

  let j = 0
  while (j < k) {
    ans.push(temp.slice(0, k))
    i = 0
    while (j < k && temp[j] + 1 === temp[j + 1]) {
      temp[j] = j + 1
      ++j
    }
    ++temp[j]
  }

  return ans
};
combine(4, 2)