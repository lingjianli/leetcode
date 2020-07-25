/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let hashNum = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    },
    ans = 0,
    len = s.length;
  for (let i = 0; i < len; ) {
    if (i + 1 < len && hashNum[s.substring(i, i + 2)]) {
      ans += hashNum[s.substring(i, i + 2)];
      i += 2;
      continue;
    }
    ans += hashNum[s.substring(i, i + 1)];
    i++
  }
  return ans;
};