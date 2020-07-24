/** 
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 说明:
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
*/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let len = numbers.length, tempIndexs = []
  // 常规方法
  // for(let i = 0; i < len; i++) {
  //   if(numbers[i] > target) continue
  //   let differNum = target - numbers[i],
  //     findIndex = numbers.indexOf(differNum)
  //   if(findIndex !== -1 && findIndex !== i) {
  //     tempIndexs = [i + 1, findIndex + 1]
  //     break
  //   }
  // }
  // return tempIndexs.sort((a, b) => a - b)
  // 二分法
  // for(let i = 0; i < len; i++) {
  //   let low = i + 1, high = len - 1;
  //   while(low <= high) {
  //     let mid = Math.floor(high - low) / 2 + low;
  //     if(numbers[mid] == target - numbers[i]) {
  //       return [i + 1, mid + 1]
  //     } else if(numbers[mid] > target - numbers[i]) {
  //       high = mid - 1
  //     } else {
  //       low = mid + 1
  //     }
  //   }
  // }
  // return [-1, -1]

  // 双指针
  let low = 0, high = len - 1;
  while(low < high) {
    let sum = numbers[low] + numbers[high]
    if(sum === target) {
      return [low + 1, high + 1]
    } else if(sum > target) {
      high--
    } else  {
      low++
    }
  }
  return [-1, -1]
};