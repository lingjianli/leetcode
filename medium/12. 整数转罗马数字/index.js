/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV', 'I'];
  let string = '';
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] <= num) {
      num -= nums[i];
      string += symbols[i];
    }
  }
  return string;
};

let intToRoman2 = function(num) {
  let numKeys = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let hashNum = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  // 返回上限值
  function returnFloorInt(num, len) {
    for (let i = 0; i < len; i++) {
      if (num <= numKeys[i]) {
        return {
          floor: numKeys[i],
          index: i
        };
      }

      if (i === len - 1) {
        return {
          floor: numKeys[i],
          index: len
        };
      }
    }
  }
  let temp = num, str = '';
  let len = numKeys.length;
  while (temp > 0) {
    // 返回上限值
    let { floor, index } = returnFloorInt(temp, len);
    let not = temp - floor < 0;
    temp = temp - (not ? numKeys[index - 1] : floor);
    let curFloor = not ? numKeys[index - 1] : floor;
    // 缩小区间范围
    len = index;
    str += hashNum[curFloor];
  }
  console.log(str);
  return str;
};

intToRoman(3999); // MMMCMXCIX
intToRoman(58); // LVIII
intToRoman(1994); // MCMXCIV
