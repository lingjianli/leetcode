/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let isLong = num1.length > num2.length
  let longNum = (isLong ? num1 : num2).split("").reverse(), 
    shortNum = (isLong ? num2: num1).split("").reverse(),
    sumStr = "",
    temp = 0
  for(let i = 0; i < longNum.length; i++) {
    let longChar = Number(longNum[i]), shortChar = 0, tempSum = 0
    if(i < shortNum.length) {
      shortChar = Number(shortNum[i])
    }
    tempSum = longChar + shortChar + temp
    sumStr += String(tempSum % 10)
    temp = tempSum > 9 ? 1 : 0
  }
  temp > 0 && (sumStr += temp)
  return sumStr.split("").reverse().join("")
};

console.log(addStrings('9', '99'))