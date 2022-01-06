/**
 * 给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。
 * 进阶：你可以在 O(n) 的时间解决这个问题吗？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  // 暴力法
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      let temp = nums[i] ^ nums[j];
      if (temp > ans) {
        console.log(nums[i], nums[j]);
        ans = temp;
      }
    }
  }
  console.log(ans);
};

findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]);
