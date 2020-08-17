/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let repeatCount = [], tempSum = 0, len = s.length
  for(let i = 0; i < len; i++) {
    tempSum++
    let char = s.charAt(i)
    if(i === len - 1) {
      repeatCount.push(tempSum)
      break
    }
    if(i + 1 < len && s.charAt(i + 1) !== char) {
      repeatCount.push(tempSum)
      tempSum = 0
    }
  }
  let ans = 0
  for(let i = 1; i < repeatCount.length; i++) {
    ans += Math.min(repeatCount[i - 1], repeatCount[i])
  }
  return ans
};

console.log(countBinarySubstrings('0011001'))