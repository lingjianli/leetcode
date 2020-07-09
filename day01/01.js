/**
 * 将罗马数字转成数字
 */
                

 /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let strArr = s.split(""), numObj = {I:1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}, count = 0, len = strArr.length
  for(let i = 0; i < len; i++) {
      console.log(strArr[i])
      if(strArr[i] === "I" && (i + 1) < len && strArr[i + 1] !== "I") {
          count += numObj[strArr[i + 1]] - numObj.I
          i++
      }
      else if(strArr[i] === "X" && (i + 1) < len && strArr[i + 1] !== "X") {
          count += numObj[strArr[i + 1]] - numObj.X
          i++
      }
      else if(strArr[i] === "C" && (i + 1) < len && strArr[i + 1] !== "C") {
          count += numObj[strArr[i + 1]] - numObj.C
          i++
      } else {
          count += numObj[strArr[i]]
      }
  }
  return count
};