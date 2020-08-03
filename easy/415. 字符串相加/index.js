/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let isLong = num1.length > num2.length
  let longNum = (isLong ? num1 : num2), 
    shortNum = (isLong ? num2: num1),
    sumStr = "",
    temp = 0
  for(let i = longNum.length - 1, j = shortNum.length - 1; i >= 0 ; i--, j--) {
    let longChar = Number(longNum.charAt(i)), shortChar = 0, tempSum = 0
    if(j >= 0) {
      shortChar = Number(shortNum.charAt(j))
    }
    tempSum = longChar + shortChar + temp
    sumStr = String(tempSum % 10) + sumStr
    temp = tempSum > 9 ? 1 : 0
  }
  temp > 0 && (sumStr = temp + sumStr)
  return sumStr
};

console.log(addStrings('133', '78331'))