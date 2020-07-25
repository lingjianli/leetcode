
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