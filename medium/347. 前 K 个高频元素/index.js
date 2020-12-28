/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // 暴力法
  // let map = {}
  // for (let i = 0; i < nums.length; i++) {
  //   let current = nums[i]
  //   if (!map[current]) map[current] = 0
  //   map[current]++
  // }
  // return [...new Set(nums)].sort((a, b) => map[b] - map[a]).slice(0, k)

  let map = new Map()

  nums.forEach(item => {
    
  })
};

topKFrequent([1,1,1,2,2,3], 2)